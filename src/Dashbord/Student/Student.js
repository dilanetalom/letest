import React, { useState } from 'react'
import './student.css'
import Layout from '../Layout/Layout'
import img from '../../assets/images/🦆 search.png'
import user from '../../assets/images/adduser.png'
import icon from '../../assets/images/🦆 icon _arrow.png'
import modal from '../../assets/images/modal.png'
import { Link } from 'react-router-dom'

function Student() {
    const [changes, setChanges] = useState(false)
    const [element, setElement] = useState( [
        {
            id: 1,
            matricule: "SE0001",
            name: "Mary Doe",
            town: "Yaounde",
            date: "1998/02/02"
        },
        {
            id: 2,
            matricule: "SE0002",
            name: "John Doe",
            town: "Bafoussam ",
            date: "1998/02/02"
        },
        {
            id: 3,
            matricule: "SE0003",
            name: "Jean Doe",
            town: "Bamenda",
            date: "2008/02/02"
        },
    ])

// ****************search*****************/
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredData = element.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const searchs = ()=>{
        setElement(filteredData);
      }

// **********************************

// ************pagination******************/

      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 3;
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = element.slice(indexOfFirstItem, indexOfLastItem);
  
      const goToPreviousPage = () => {
          setCurrentPage(currentPage - 1);
      };
  
      const goToNextPage = () => {
          setCurrentPage(currentPage + 1);
      };

// **********************************

// *****************trie********************/

      const triename = () => {
        const sortedData = [...element].sort((a, b) => a.name.localeCompare(b.name));
        setElement(sortedData);
    };
    const trietown = () => {
        const sortedData = [...element].sort((a, b) => a.town.localeCompare(b.town));
        setElement(sortedData);
    };
    const triebirt = () => {
        const sortedData = [...element].sort((a, b) => a.date.localeCompare(b.date ));
        setElement(sortedData);
    };

  // **********************************



  const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
  const [formValues, setFormValues] = useState({
    number: '',
    code: '',
    name: '',
    duration: '',
});


const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (event) => {
    event.preventDefault();

    const newElement = {
        matricule: formValues.matricule,
        town: formValues.town,
        name: formValues.name,
        date: formValues.date,
    };

    setElement([...element, newElement]);

    setFormValues({
        matricule: '',
        town: '',
        name: '',
        date: '',
    });
};
   //   ********************************


    return (
        <Layout>
            <div>
            <div className='container_element'>
                <div className='pathname'>{window.location.pathname}</div>
                <div className='content_table'>
                    <div className='content_input'>
                        <img src={img} alt='' />
                        <input type='text' placeholder='Search Here'
                         onChange={handleSearchChange}
                         value={searchTerm}
                        />
                        <button onSubmit={searchs}>Search</button>
                    </div>
                    <div className='content_add_user'>
                        <span>Student</span>
                        <img src={user} alt=''onClick={openModal} />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Matricule</th>
                                <th>
                                   <div className='heade'>
                                   Name
                                    <img src={icon} alt=''onClick={triename} />
                                   </div>
                                </th>
                                <th>
                                    <div className='heade'>
                                    Town
                                    <img src={icon} alt=''onClick={trietown} />
                                    </div>
                                </th>
                                <th>
                                   <div className='heade'>
                                      Date of Birth
                                    <img src={icon} alt=''onClick={triebirt} />
                                   </div>
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className='space'></div>
                            {
                                element.map((item) => {
                                    return (

                                        <tr>
                                            <td><div className='heades'> {item.matricule}</div> </td>                                       
                                            <td><div className='heades'>{item.name}</div></td>
                                            <td><div className='heades'>{item.town}</div></td>
                                            <td><div className='heades'>{item.date}</div></td>
                                            <td className='action'>
                                                <span onClick={() => setChanges(!changes)}>...</span>
                                               
                                                   {
                                                    changes?
                                                        <div className='modal'>
                                                            <img src={modal} alt='' />
                                                            <div className='modal_element'>
                                                                <Link to="">Edit</Link>
                                                                <Link to="">Suspend</Link>
                                                                <Link to="">Delete</Link>
                                                            </div>
                                                        </div>:null
                                                       }                                            
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                            <div className='space'></div>
                        </tbody>
                    </table>
                    <div className='content_pagination'>
                        <ul class="pagination">
                            <li class="pagination-item" onClick={goToPreviousPage}><a href="" class="pagination-link activeone">Prev</a></li>
                            <li class="pagination-item"><a href="" class="pagination-link">1</a></li>
                            <li class="pagination-item"><a href="" class="pagination-link">2</a></li>
                            <li class="pagination-item"><a href="" class="pagination-link">3</a></li>
                            <li class="pagination-item" onClick={goToNextPage}><a href="" class="pagination-link activetwo">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='modal_couse'>

{isOpen && (
    <div className="modal">
        <form className="modal-content" onSubmit={handleSubmit}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Add Student</h2>
            <div>
                <div className='input_container'>
                    <label>Matricule</label>
                    <input type="text"
                        name='matricule'
                        placeholder="exx:SEF20"
                        value={formValues.matricule}
                        onChange={handleInputChange}
                    />

                </div>
                <div className='input_container'>
                    <label>Town</label>
                    <input type="text"
                        name='town'
                        placeholder="yaounde"
                        value={formValues.town}
                        onChange={handleInputChange}
                    />

                </div>
                <div className='input_container'>
                    <label>Name</label>
                    <input type="text"
                        name='dilane'
                        placeholder="exx: analyse"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />

                </div>
                <div className='input_container'>
                    <label>Date</label>
                    <input type="date"
                        name='date'
                        placeholder="exx: 2020-12-2"
                        value={formValues.date}
                        onChange={handleInputChange}
                    />

                </div>

            </div>
            <div className='container_button'>
                <button type="submit">Add </button>
            </div>
        </form>
    </div>
)}
</div>
            </div>
        </Layout>
    )
}

export default Student