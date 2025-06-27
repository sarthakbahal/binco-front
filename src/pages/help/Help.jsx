import React from 'react'
import './help.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Link from '@mui/material/Link';
import CommentIcon from '@mui/icons-material/Comment';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Help = () => {
    return (
        <div className='help'>
            <Sidebar />
            <div className="helpcont">
                <Navbar />

                <h2>Help Center</h2>
                <p>Find answers to your questions here. </p>

                <div className="status">
                    <div className="box">
                        <h2>Bin Locater:</h2>
                        <Link href="#" underline="hover" style={{ fontSize: '1.2rem', color: '#1976d2' }}>
                            {'Find a bin near you'}
                        </Link>

                    </div>
                    <div className="box">
                        <h2>Email Support:</h2>
                        <p>bingo@mails.in</p>
                    </div>
                    <div className="box">
                        <h2>Phone Support:</h2>
                        <p>+910000000000</p>
                    </div>

                </div>


                <div className="qna">

                    <div className="heads">
                        <CommentIcon style={{ fontSize: '2rem', color: '#1976d2' }} />
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="question">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" style={{fontWeight:'550',padding:'0.2rem',fontSize:'1.27rem'}}>How do I start using the binGo Machines ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Simply scan the QR code on any EcoBin machine with your phone, insert your recyclable items, and start earning binCoins instantly!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span" style={{fontWeight:'550',padding:'0.2rem',fontSize:'1.27rem'}}>What items can I recycle?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can recycle plastic bottles, metal cans, glass bottles, and paper packages. Each machine displays accepted items clearly.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" style={{fontWeight:'550',padding:'0.2rem',fontSize:'1.27rem'}}>How do I earn binCoins ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Earn binCoins by recycling items at EcoBin machines. Different items have different values - plastic bottles typically earn 2-3 binCoins each.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" style={{fontWeight:'550',padding:'0.2rem',fontSize:'1.27rem'}}>How do I redeem my binCoins ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Visit the Coupon Store section in your dashboard, browse available deals, and click 'Redeem Now!' on any offer you'd like to redeem.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" style={{fontWeight:'550',padding:'0.2rem',fontSize:'1.27rem'}}>The machine isn't recognizing my items.</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   Make sure items are clean and empty. If the issue persists, try another machine or contact support with the machine ID.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" style={{fontWeight:'550',padding:'0.2rem',fontSize:'1.27rem'}}>I didn't recieve my binCoins</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Check your transaction history. If the transaction is missing, contact support with the machine ID and approximate time.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Help