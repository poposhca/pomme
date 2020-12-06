import LocalStorageItem from './LocalStorageItem';
const userNameKey = 'userName';

class UserName {
    saveName(name: string): void {
        LocalStorageItem.saveItem(userNameKey, name)
    }

    getName(): string {
        return LocalStorageItem.getItem(userNameKey);
    }
}

export default UserName;
