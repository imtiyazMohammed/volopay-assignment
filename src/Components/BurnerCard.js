import React from 'react'
import './BurnerCard.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Button from 'react-bootstrap/Button';

function BurnerCard({props}) {
    let TOTAL = props.spent.value + props.available_to_spend.value
    let RED_PERCENTAGE =  Math.round((props.spent.value/TOTAL)*100) 
    let GREEN_PERCENTAGE = Math.round((props.available_to_spend.value/TOTAL)*100)
  return (
    <div className='card shadow-lg'>
        <div className='cardname-logo'>
            <span>{props.name}</span>
            <div className='icon-border shadow'><LocalFireDepartmentIcon sx={{color: 'red', fontSize:40}}></LocalFireDepartmentIcon></div>
        </div> 

        <div className='username'>
            <span>{props.owner_name}</span>
            <span className='gray-dot'></span>
            <span>Software Subscription</span>
        </div> {/* User name followed by subscription name */}

        <div className='subtype'>
            <Button className='bg-light border-gray buttonConv'>BURNER</Button>
            <span>Expires: {props.expiry}</span>
        </div> {/* Type and  Expiry*/}

        <div className='progressbar'>
        <ProgressBar className='pbar'>
        <ProgressBar  variant="success" now={GREEN_PERCENTAGE} key={1} />
        <ProgressBar  variant="danger" now={RED_PERCENTAGE} key={3} />
        </ProgressBar>
        </div> {/* Progress Bar */}

        <div className='spent'>
            <span className="red-dot"></span>
            <div className='spent-amount'>
            <span className='spent-span1'>Spent</span>
            <span className='spent-span2'>{props.spent.value} {props.spent.currency}</span>
            </div>

        </div> {/* Spent details */}

        <div className='spent'>
            <span className="green-dot"></span>
            <div className='spent-amount'>
            <span className='spent-span1'>Available to spend</span>
            <span className='spent-span2'>{props.available_to_spend.value} SGD</span>
            </div>

        </div> {/* Spent details */}
    </div>
  )
}

export default BurnerCard