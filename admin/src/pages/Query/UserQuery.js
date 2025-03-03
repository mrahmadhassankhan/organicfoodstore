import React, { useState, useEffect } from 'react';
import GridLayout from '../../components/GridLayout';
import CSS from './UserQuery.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserQuery = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:1783/api/getcontactus")
      .then((res) => {
        setQueries(res.data);
      })
      .catch((err) => {
        toast.error('Error in Data Fetching')
      });
  };

  const handleDeleteCategory = (queryId) => {
    axios
      .delete(`http://localhost:1783/api/deletecontactus/${queryId}`)
      .then((res) => {
        fetchData();
        toast.success('Successfully Deleted Query');
      })
      .catch((err) => {
        toast.error('Error in Deleting Query');
      }
      );
  };

  return (
    <GridLayout>
      <h1 className={CSS['addproduct-title']}>User Query List</h1>
      <table className={CSS['table']}>
        <thead>
          <tr>
            <th className={CSS['table-head-row']}>Name</th>
            <th className={CSS['table-head-row']}>Subject</th>
            <th className={CSS['table-head-row']}>Email</th>
            <th className={CSS['table-head-row']}>Message</th>
            <th className={`${CSS['table-head-row']} ${CSS['table-head-btn']}`}>Delete Query</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <tr key={query._id}>
              <td className={CSS['table-data']}>{query.name}</td>
              <td className={CSS['table-data']}>{query.subject}</td>
              <td className={CSS['table-data']}>{query.email}</td>
              <td className={CSS['table-data']}>{query.message}</td>
              <td className={CSS['table-data']}>
                <button
                  className={CSS['table-data-delete-btn']}
                  type='button'  // Change to type='button' to prevent form submission
                  onClick={() => handleDeleteCategory(query._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer/>
    </GridLayout>
  );
};

export default UserQuery;
