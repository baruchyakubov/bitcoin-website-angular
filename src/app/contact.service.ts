import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Contact, ContactFilter } from './models/contact.model';
import { StorageService } from './storage.service';

const CONTACTS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a56640298ab77236845b82b",

        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "054-65566776"
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "054-65566776"
    }
];

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private storageService: StorageService) { }

    //mock the server
    // private contacts: string | null = localStorage['contacts']
    private _contactsDb: Contact[] = this.storageService._loadFromStorage('contacts')

    private _contacts$ = new BehaviorSubject<Contact[]>([])
    public contacts$ = this._contacts$.asObservable()

    private _contactFilter$ = new BehaviorSubject<ContactFilter>({ term: '' });
    public contactFilter$ = this._contactFilter$.asObservable()




    public loadContacts(): void {

        if (!this._contactsDb || !this._contactsDb.length) {
            this._contactsDb = CONTACTS
            this.storageService._saveToStorage('contacts', this._contactsDb)
        }
        let contacts = this._contactsDb;
        const filterBy = this._contactFilter$.value
        contacts = contacts.filter(({ name }) => {
            return name.toLowerCase().includes(filterBy.term.toLowerCase())
        });
        this._contacts$.next(this._sort(contacts))
    }


    public getContactById(id: string): Observable<Contact> {
        //mock the server work
        const contact = this._contactsDb.find(contact => contact._id === id)

        //return an observable
        return contact ? of(contact) : throwError(() => `Contact id ${id} not found!`)
    }

    public deleteContact(id: string | undefined) {
        //mock the server work
        this._contactsDb = this._contactsDb.filter(contact => contact._id !== id)
        this.storageService._saveToStorage('contacts', this._contactsDb)
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._contactsDb)
    }

    public setFilter(contactFilter: ContactFilter) {
        this._contactFilter$.next(contactFilter)
        this.loadContacts()
    }

    public saveContact(contact: Contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact)
    }

    private _updateContact(contact: Contact) {
        //mock the server work  
        this._contactsDb = this._contactsDb.map(c => contact._id === c._id ? contact : c)
        this.storageService._saveToStorage('contacts', this._contactsDb)
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._sort(this._contactsDb))
    }

    private _addContact(contact: Contact) {
        //mock the server work
        const newContact = new Contact(contact.name, contact.email, contact.phone);
        if (typeof newContact.setId === 'function') newContact.setId(getRandomId());
        this._contactsDb.push(newContact)
        this.storageService._saveToStorage('contacts', this._contactsDb)
        this._contacts$.next(this._sort(this._contactsDb))
    }

    private _sort(contacts: Contact[]): Contact[] {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }

            return 0;
        })
    }

    private _filter(contacts: Array<Contact>, term: string) {
        term = term.toLocaleLowerCase()
        return contacts.filter((contact: Contact) => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term)
        })
    }
    public getEmptyContact() {
        return {
            name: '',
            phone: '',
            email: ''
        }
    }
}



function getRandomId(length = 8): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            characters.length));
    }
    return result;
}