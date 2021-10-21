import commonjs from "@rollup/plugin-commonjs";
import image from '@rollup/plugin-image';
import resolve from "@rollup/plugin-node-resolve";
import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import json from '@rollup/plugin-json';

const packageJson = require("./package.json");

export default {
    input: "src/index.tsx",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal({ includeDependencies: true }),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        terser(),
        image(),
        json({
            compact: true
        }),
        postcss({
            use: {
                sass: {
                    includePaths: [path.resolve(__dirname, 'src/scss/')]
                }
            },
            extract: true,
            sourceMap: true
        })
    ]
};