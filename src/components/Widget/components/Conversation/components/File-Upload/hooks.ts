import 'idempotent-babel-polyfill';
import { useCallback, useState } from 'react';

const validateUploadFiles = async (files: FileList | null): Promise<TFile[]> => {
	if (!files) {
		return [];
	}
	const result: TFile[] = []
	await [...files].reduce(async (promise, file) => {
		await promise;
		if (!file.type.includes('image')) {
			return;
		}
		const reader = new FileReader();
		reader.readAsDataURL(file);
		return new Promise((resolve) => {
			reader.onload = function () {
				result.push({
					source: reader.result as string,
					file,
				});
				resolve();
			};
		});
	}, Promise.resolve());
	return result;
};

type TUseUploadFilesReturn = [
	TFile[],
	(event: { target: HTMLInputElement; }) => void,
	(index: number) => void,
];

export type TFile = {
	source?: string;
	file?: File;
}

export const useUploadFiles = (): TUseUploadFilesReturn => {
	const [files, setFiles] = useState<TFile[]>([]);
	
	const selectFilesWrapper = useCallback((event: { target: HTMLInputElement; }) => {
		(async () => {
			const uploadFiles = await validateUploadFiles(event.target.files);
			setFiles(uploadFiles);
		})();
	}, []);
	const deleteFile = useCallback((index: number) => {
		files.splice(index, 1);
		setFiles([...files]);
	}, [files]);
	
	return [files, selectFilesWrapper, deleteFile];
};
