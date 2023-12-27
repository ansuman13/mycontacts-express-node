
const getContacts = (req, res) => {
    res.status(200).json({"message": "get all contacts"})
}

const getContact = (req,res)=>{
    res.status(200).json({"message": `get this contact:${req.params.id}`})
}

const createContact = (req, res) => {
    res.status(200).json({"message": "create a contact"})
}

const updateContact = (req, res) => {
    res.status(200).json({"message": `update a contact: ${req.params.id}`})
}

const deleteContact = (req, res) => {
    res.status(200).json({"message": `delete a contact: ${req.params.id}`})
}

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}