import React, { Component } from 'react';
import { mount } from 'enzyme';
import Note from './Note';

//passing props
const props = { note: { text: 'test note'}}

console.log({...props});

const triplePrint = (a, b, c) => {
    console.log(`${a} ${b} ${c}`);
}

const message = ['react', 'is', 'awesome'];

triplePrint(...message);
//specify the descirption of the test
describe('Note', () => {
    //spread atributes
    let note = mount(<Note {...props}/>);

    //decribe the test
    it('renders the note text', () => {
        console.log(note.debug());
        expect(note.find('p').text()).toEqual(props.note.text);
    });
});

