import React, { useState } from 'react';
import "./DocumentManager.css"

function DocumentManager() {
  const [documents, setDocuments] = useState([]);
  const [formData, setFormData] = useState({
    NameDoc: '',
    description: '',
    datePublished: '',
    file: null,
    fileDetails: null
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileSize, setSelectedFileSize] = useState('');
  const [selectedFileType, setSelectedFileType] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      setSelectedFileName(e.target.files[0].name); // Update selected file name
      setSelectedFileSize(e.target.files[0].size); // Update selected file size
      setSelectedFileType(e.target.files[0].type); // Update selected file type
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // If editing, update the document
      const updatedDocuments = [...documents];
      updatedDocuments[editingIndex] = formData;
      setDocuments(updatedDocuments);
      setEditingIndex(null);
    } else {
      // If not editing, add a new document
      const newDocument = { ...formData };
      newDocument.fileDetails = {
        name: selectedFileName,
        size: selectedFileSize,
        type: selectedFileType
      };
      setDocuments([...documents, newDocument]);
    }
    setFormData({ NameDoc: '', description: '', datePublished: '', file: null }); // Reset form data
    setSelectedFileName(''); // Reset selected file name
    setSelectedFileSize(''); // Reset selected file size
    setSelectedFileType(''); // Reset selected file type
  };

  const handleEdit = (index) => {
    const documentToEdit = documents[index];
    setFormData(documentToEdit);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  return (
    <div className="container" style={{ marginTop: '100px', marginBottom: '100px', maxWidth: '800px' }}>
      <h1 className="mb-4" style={{ color: '#3c009d', fontSize: '48px', fontWeight: 700, textDecoration: 'underline' }}>Documents</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="mb-3 mr-3">
          <input
            type="text"
            className="form-control"
            name="NameDoc"
            placeholder="Document Name"
            value={formData.NameDoc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 mr-3">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 mr-3">
          <input
            type="date"
            className="form-control"
            name="datePublished"
            value={formData.datePublished}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 mr-3">
          {/* Hide the "No file chosen" text and style the file input */}
          <label className="custom-file-upload">
            <input
              type="file"
              className="form-control-file"
              name="file"
              onChange={handleChange}
              required
            />
            Choose File
          </label>
          {/* Display selected file details */}
          {selectedFileName && (
            <div className="mt-2">
              <p><strong>File Name:</strong> {selectedFileName}</p>
              <p><strong>File Size:</strong> {selectedFileSize} bytes</p>
              <p><strong>File Type:</strong> {selectedFileType}</p>
            </div>
          )}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">{editingIndex !== null ? 'Update' : 'Add'}</button>
        </div>
      </form>
      <ul className="list-group">
        {documents.map((doc, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <div><strong>Name:</strong> {doc.NameDoc}</div>
              <div><strong>Description:</strong> {doc.description}</div>
              <div><strong>Date Published:</strong> {doc.datePublished}</div>
              {doc.fileDetails && (
                <div className="mt-2">
                  <p><strong>File Name:</strong> {doc.fileDetails.name}</p>
                  <p><strong>File Size:</strong> {doc.fileDetails.size} bytes</p>
                  <p><strong>File Type:</strong> {doc.fileDetails.type}</p>
                </div>
              )}
            </div>
            <div>
              <button className="btn btn-info mr-2" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentManager;
