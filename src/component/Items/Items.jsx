import React from 'react'
import './Items.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion';
import { useState } from 'react';


const Items = () => {
  return (
    <section className='v-wrapper' id='OurValue'>
        <div className="padding innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <div className='flexColStart info-div' style={{ marginBottom: '-10px' }}>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText' style={{ marginTop: '10px' }}>
                        We alwaye ready to help by providing the best services for you.
                        We believe a good blace to live can make your life better.
                    </span>
                </div>
                <Accordion 
                style={{border:'none'}}
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item,i)=>{
                            const [className,setClassName]=useState(null)
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading className='accordionItemHeading'>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({expanded})=> expanded ? setClassName('expanded') : setClassName('collapsed')
                                            }
                                        </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                            
                        })
                    }

                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Items
