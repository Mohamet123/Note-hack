import React, { useState } from 'react';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState("null");

  const addNote = () => {
    const newNote = {
      text: noteText,
      date: new Date().toLocaleString(),
    };
    if (isEditMode) {
      const updatedNote = [...notes];
      updatedNote[editIndex] = newNote;
      setNotes(updatedNote);
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }
    setNoteText('');
  };

  const handleEditClick = (index) => {
    setIsEditMode(true);
    setEditIndex(index);
    setNoteText(notes[index].text);
  };

  const handleDelete = (index) =>{
    const updateNote = [...notes];
    updateNote.splice(index , 1);
    setNotes(updateNote);
  };
  
  const clearAllNotes = () => {
    setNotes([]);
  };
  
  return (
    <div className="container mt-4 ">
        
      <Form>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Ajouter une note..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button className='btn btn-success' onClick={addNote}>
              {isEditMode ? 'Update' : 'Add'}
            </Button>
          </Col>
        </Row>
      </Form>

      <div className='mt-4 bg-white note rounded-1 mb-5'>
        <div className='row pt-3  tt'>
            <div className='col-3'><h2>Note</h2></div>
            
            <div className='col-9 d-flex justify-content-end'><button className='btn btn-info text-white fw-bold' onClick={ clearAllNotes}>Clear ALL</button></div>
        </div>
      <Row className="mt-3 ">
      {notes.map((note, index) => (
        
        <Card key={index} className="mt-3  ms-2 d-flex justify-content-center shadow"  style={{ borderLeft: '5px solid rgb(3, 95, 214) ' , width: '21rem' }}>
          <Card.Body >
            <Card.Text>{note.text}</Card.Text>
            <Card.Text> {note.date}</Card.Text>
            <div className="row justify-content-end">
              <Col xs="auto">
                  
                  <FaPencilAlt onClick={() => handleEditClick(index)} style={{ color:'blue' , fontSize:'21px' ,cursor:'pointer'}} />
                
              </Col>
              <Col xs="auto">
                <RiDeleteBin5Fill onClick={() => handleDelete(index)}  style={{ color:'red' , fontSize:'21px' ,cursor:'pointer'}}/>
              </Col>
            </div>
          </Card.Body>
        </Card>
      ))}
      </Row>
      </div>
    </div>
      
  );
};

export default NoteApp;
