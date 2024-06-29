import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form
                className="contact-form-wrapper"
                action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c"
                method="POST"
            >
                <div className="row">
                    <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Vaše ime"
                                ref={register({ required: "Ime je obavezno" })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="E-mail adresa"
                                ref={register({
                                    required: "E-mail je obavezan",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address",
                                    },
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="subject"
                                placeholder="Naslov"
                                ref={register({
                                    required: "Naslov je obavezan",
                                })}
                            />
                            {errors.subject && <p>{errors.subject.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-12" data-aos="fade-up">
                        <div className="form-group mb-0">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Vaša poruka..."
                                ref={register({
                                    required: "Poruka je obavezna",
                                })}
                            ></textarea>
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="form-group mb-0">
                            <button className="btn-submit" type="submit">
                                Pošalji
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
