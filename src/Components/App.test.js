import React, { Component } from 'react';
import { mount } from 'enzyme';
import App from './App';


describe('App', () => {
    //variable which stores the tests
    let app = mount(<App />);

    //first test h2
    it('renders the App title', () => {
        console.log(app.debug());
        expect(app.find('h2').text()).toEqual('Note to self');
    });
    //second test button Clear Notes at(1)
    it('renders the clear button', () => {
        expect(app.find('.btn').at(1).text('Clear Notes'))
    });

    //third test Form element
    describe('when rendering the form', () => {
        it('creates a form component', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        //Form Control element
        it('renders a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        });

        //Submit Button
        it('renders a submit button', () => {
            expect(app.find('.btn').at(0).text('Submit'));
        });
    });

    //Testing from behaviour
    describe('when creating a note', () => {
        let testNote = 'test note';

        beforeEach(() => {
            app.find('FormControl').simulate('change',{
                //An object
                target: { value: testNote }
            });
        });

        it('updates the text in state', () => {
            expect(app.state().text).toEqual(testNote);
        });

        describe('and submitting the new note', () => {
            beforeEach(() => {
               app.find('.btn').at(0).simulate('click'); 
            });

            afterEach(() => {
                app.find('button').at(1).simulate('click');
            });

            it('adds the new state', () => {
                //console.log(app.state());
                expect(app.state().notes[0].text).toEqual(testNote);
            });

            describe('and remounting the component', () => {
                //get mounted
                let app2;

                beforeEach(() => {
                    app2 = mount(<App />);
                });
                
                it('reads the stored note cookies', () => {
                    console.log(app2.state());
                    expect(app2.state().notes).toEqual([{ text: testNote }]);
                });
            });
            describe('and clicking th clear button', () => {
                beforeEach(() => {
                    app.find('.btn').at(1).simulate('click');
                });

                it('clears the notes in state', () => {
                    expect(app.state().notes).toEqual([]);
                });
            });
        });
    });
});