# Contributing

First off, thank you for considering contributing to this project! Now, to start contributing:

## Issues and suggestions

If you either find a bug or have any suggestion or opinion you want to discuss and share, please open an issue and add the proper label to it so we can get in contact with you.
There are no wrong opinions! All feedback is welcome to make this the most suitable tool for you to use and for us to grow.

## How to contribute

If you have a new feature you want to add or a bug you think you can fix, follow this steps:

1. Fork the repo
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request with **clear title and description**

## Installation

To get this project up and running, you need to build it with

```bash
npm run build
```

and then, add it to a dummy project using the file instead of the package. You can use either yarn or npm:

```bash
npm i <path-to>/react-chat-widget

yarn add file:<path-to>/react-chat-widget
```

##  Testing

Your new feature **must** be tested with the proper tools. In this project, we use Jest and Enzyme. Once your tests are written, run:

```bash
npm run test
```

If there any view changes, you need to add screenshots for what's been changed for us to see any improvement or your new feature.
