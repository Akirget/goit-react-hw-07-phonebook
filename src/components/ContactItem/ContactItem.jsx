import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id).unwrap();
  };

  return (
    <div className={s.div}>
      <li id={id} className={s.item}>
        <p className={s.contact}>
          {name} &nbsp; - &nbsp; {phone}
        </p>
        <button
          className={s.btn}
          type="submit"
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
