import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import LogItem from './LogItem';
import AddLogItem from './AddLogItem';
import SimpleTabs from './SampleTabs';
import SideNav from './side-nav/SideNav';

const App = () => {
  const [logs, setLogs] = useState([
    {
      _id: 1,
      text: 'This is log one',
      priority: 'low',
      user: 'Brad',
      created: new Date().toString(),
    },
    {
      _id: 2,
      text: 'This is log two',
      priority: 'moderate',
      user: 'Kate',
      created: new Date().toString(),
    },
    {
      _id: 3,
      text: 'This is log three',
      priority: 'high',
      user: 'John',
      created: new Date().toString(),
    },
  ]);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    variant: 'success',
  });

  function addItem(item) {
    if (item.text === '' || item.user === '' || item.priority === '') {
      showAlert('Please enter all fields', 'danger');
      return false;
    }

    item._id = Math.floor(Math.random() * 90000) + 10000;
    item.created = new Date().toString();
    setLogs([...logs, item]);
    showAlert('Log Added');
  }

  function deleteItem(_id) {
    setLogs(logs.filter((item) => item._id !== _id));
    showAlert('Log Removed');
  }

  function showAlert(message, variant = 'success', seconds = 3000) {
    setAlert({
      show: true,
      message,
      variant,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        variant: 'success',
      });
    }, seconds);
  }

  return <SideNav />;
};

export default App;
