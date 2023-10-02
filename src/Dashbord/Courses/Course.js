import React, { useState } from 'react'
import './course.css'
import Layout from '../Layout/Layout'
import img from '../../assets/images/🦆 search.png'
import add from '../../assets/images/add.png'
import icon from '../../assets/images/🦆 icon _arrow.png'
import modal from '../../assets/images/modal.png'
import { Link } from 'react-router-dom'

function Course() {
    const [changes, setChanges] = useState(false)


    const [element, setElement] = useState(

        [
            {
                id: 1,
                matricule: "1",
                code: "C04D",
                name: "Analysis",
                duration: "30"
            },
            {
                id: 2,
                matricule: "2",
                code: "S85F",
                name: "Algorithm",
                duration: "40"
            },
            {
                id: 3,
                matricule: "3",
                code: "AA03",
                name: "Database",
                duration: "35"
            },
            {
                id: 4,
                matricule: "4",
                code: "C04G",
                name: "machine learning",
                duration: "60"
            },
            {
                id: 5,
                matricule: "5",
                code: "S85T",
                name: "Network",
                duration: "80"
            },
            {
                id: 6,
                matricule: "6",
                code: "AA03",
                name: "SQL",
                duration: "90"
            },
        ]

    );


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




    const triename = () => {
        const sortedData = [...element].sort((a, b) => a.name.localeCompare(b.name));
        setElement(sortedData);
    };
    const triecode = () => {
        const sortedData = [...element].sort((a, b) => a.code.localeCompare(b.code));
        setElement(sortedData);
    };
    const trieduration = () => {
        const sortedData = [...element].sort((a, b) => a.duration.localeCompare(b.duration));
        setElement(sortedData);
    };



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
            number: formValues.number,
            code: formValues.code,
            name: formValues.name,
            duration: formValues.duration,
        };

        setElement([...element, newElement]);

        setFormValues({
            number: '',
            code: '',
            name: '',
            duration: '',
        });
    };


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
                            <button onClick={searchs}>Search</button>
                        </div>
                        <div className='content_add_user'>
                            <span>Student</span>
                            <div className='text'>
                                <div className='buton' onClick={openModal}>
                                    +
                                </div>
                                Add Course
                            </div>

                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>
                                        <div className='heade'>
                                            Course code
                                            <img onClick={triecode} src={icon} alt='' />
                                        </div>

                                    </th>
                                    <th>
                                        <div className='heade'>
                                            Name
                                            <img src={icon} alt='' onClick={triename} />
                                        </div>

                                    </th>
                                    <th>
                                        <div className='heade'>
                                            Course Duration (hours)
                                            <img src={icon} alt='' onClick={trieduration} />
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
                                    currentItems.map((item) => {
                                        return (

                                            <tr>
                                                <td><div className='heades'>{item.matricule}</div></td>
                                                <td><div className='heades'>{item.code}</div></td>
                                                <td><div className='heades'>{item.name}</div></td>
                                                <td><div className='heades'>{item.duration}</div></td>
                                                <td className='action'>
                                                    <span onClick={() => setChanges(!changes)}>...</span>

                                                    {
                                                        changes ?
                                                            <div className='modal'>
                                                                <img src={modal} alt='' />
                                                                <div className='modal_element'>
                                                                    <Link to="">Edit</Link>
                                                                    <Link to="">Suspend</Link>
                                                                    <Link to="">Delete</Link>
                                                                </div>
                                                            </div> : null
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
                                <li onClick={goToPreviousPage} class="pagination-item"><a href="" class="pagination-link activeone" >Prev</a></li>
                                <li class="pagination-item"><a href="" class="pagination-link">1</a></li>
                                <li class="pagination-item"><a href="" class="pagination-link">2</a></li>
                                <li class="pagination-item"><a href="" class="pagination-link">3</a></li>
                                <li class="pagination-item"><a href="" class="pagination-link activetwo" onClick={goToNextPage}>Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='modal_couse'>

                    {isOpen && (
                        <div className="modal">
                            <form className="modal-content" onSubmit={handleSubmit}>
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>Add Course</h2>
                                <div>
                                    <div className='input_container'>
                                        <label>Number</label>
                                        <input type="number"
                                            name='number'
                                            placeholder="exx: 0"
                                            value={formValues.number}
                                            onChange={handleInputChange}
                                        />

                                    </div>
                                    <div className='input_container'>
                                        <label>Course Code</label>
                                        <input type="text"
                                            name='code'
                                            placeholder="exx: CD444"
                                            value={formValues.code}
                                            onChange={handleInputChange}
                                        />

                                    </div>
                                    <div className='input_container'>
                                        <label>Name</label>
                                        <input type="text"
                                            name='name'
                                            placeholder="exx: analyse"
                                            value={formValues.name}
                                            onChange={handleInputChange}
                                        />

                                    </div>
                                    <div className='input_container'>
                                        <label>Duration</label>
                                        <input type="number"
                                            name='duration'
                                            placeholder="exx: 20"
                                            value={formValues.duration}
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

export default Course