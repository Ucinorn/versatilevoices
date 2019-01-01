import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import logo from '../assets/images/logo.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Versatile Voices";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
											<div className="col-6">
													<span className="image fit"><img src={logo} alt="logo" /></span>
											</div>
                        <div className="col-6">
                            <header className="major">
                                <h1>{siteTitle}</h1>
                            </header>
                            <p>Melbourne Singing Lessons for All Ages</p>
                        </div>
                    </div>
                </section>

                <section id="lessons" className="main style2">
                    <div className="grid-wrapper">
												<p>Versatile Voices offers one-on-one singing and vocal lessons for all ages and skill levels.</p>
												<p>We can offer advice and exercises to improve in many areas:</p>
		                    <div className="col-6">
	                            <ul className="major-icons">
	                                <li><span className="icon style1 major fa-music">Stage Prescence</span></li>
	                                <li><span className="icon style2 major fa-music">Sight Singing</span></li>
	                                <li><span className="icon style3 major fa-music">Music Theory</span></li>
	                                <li><span className="icon style6 major fa-music">Audition Preparation</span></li>
	                            </ul>
                        </div>
		                    <div className="col-6">
	                            <ul className="major-icons">
																	<li><span className="icon style4 major fa-music">Voice Care</span></li>
	                                <li><span className="icon style6 major fa-music">Breath Control</span></li>
	                                <li><span className="icon style5 major fa-music">Songwriting and Composition</span></li>
	                                <li><span className="icon style5 major fa-music">Improvisation</span></li>
	                            </ul>
                        </div>
												<p>Victoria has been offering singing tuition for many years. She has an extensive history of performance in as a vocalist and musician, in musical theatre, as part of a band and headlining solo performances.</p>
												<p>She is currently the Coordinator of Performing Arts at a Melbourne Primary School, with a passion for teaching students of all ages.</p>
                    </div>
                </section>

                <section id="locations" className="main style1 special">
                    <div className="grid-wrapper">


                    </div>
                </section>

                <section id="contact" className="main style2 special">
								<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    									<input type="hidden" name="bot-field" />
									    <div className="field half first">
									        <label htmlFor="name">Name</label>
									        <input type="text" name="name" id="name" />
									    </div>
									    <div className="field half">
									        <label htmlFor="email">Email</label>
									        <input type="text" name="email" id="email" />
									    </div>
									    <div className="field">
									        <label htmlFor="message">Message</label>
									        <textarea name="message" id="message" rows="6"></textarea>
									    </div>
									    <ul className="actions">
									        <li><input type="submit" value="Send Message" className="special" /></li>
									        <li><input type="reset" value="Clear" /></li>
									    </ul>
									</form>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
