import { useCallback, useState } from 'react';

const validateUploadFiles = (files: FileList | null): TFile[] => {
	if (!files) {
		return [];
	}
	return [...files].reduce<TFile[]>((acc, file) => {
		if (!file.type.includes('image')) {
			return acc;
		}
		acc.push({
			source: URL.createObjectURL(file),
			file,
		});
		return acc;
	}, []);
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
		setFiles(validateUploadFiles(event.target.files));
	}, []);
	const deleteFile = useCallback((index: number) => {
		files.splice(index, 1);
		setFiles([...files]);
	}, [files]);
	
	return [files, selectFilesWrapper, deleteFile];
};
