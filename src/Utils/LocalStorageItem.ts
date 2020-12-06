const LocalStorageItem  = {
    saveItem: (key: string, item: any): void => {
        localStorage.setItem(key, item);
    },
    getItem: (key: string): any => {
        return localStorage.getItem(key);
    }
}

export default LocalStorageItem;
