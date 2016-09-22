import React from 'react';

const Contact = () => ({

    render() {
        return (
            <div id="login" className="card">
                <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="pw1" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="pw1" placeholder="Subject"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="5" id="comment" placeholder="Write us a message."/>
                </div>
                <div className="btn btn-primary-outline">Contact Us</div>
            </div>
        );
    }
});

export default Contact;
