import axios from "axios"

export class ContactService {
    static serverUrl = `http://localhost:9000`;

    static getGroups() {
        let dataUrl = `${this.serverUrl}/groups`;
        return axios.get(dataUrl);
    } 
    static getSingleGroup(contact){
        let groupId = contact.groupId;
        let dataUrl = `${this.serverUrl}/groups/${groupId}`;
        return axios.get(dataUrl);
    }
    
    static getAllContacts() {
        let dataUrl = `${this.serverUrl}/Contacts`;
        return axios.get(dataUrl);
    }
    static getSingleContact(contactId) {
        let dataUrl = `${this.serverUrl}/Contacts/${contactId}`;
        return axios.get(dataUrl);
    }
    static createContacts(contact) {
        let dataUrl = `${this.serverUrl}/Contacts`;
        return axios.post(dataUrl,contact);
    }
    static updateContact(contact,contactId) {
        let dataUrl = `${this.serverUrl}/Contacts/${contactId}`;
        return axios.put(dataUrl,contact);
    }
    static deleteContact(contactId) {
        let dataUrl = `${this.serverUrl}/Contacts/${contactId}`;
        return axios.delete(dataUrl);
    }

}