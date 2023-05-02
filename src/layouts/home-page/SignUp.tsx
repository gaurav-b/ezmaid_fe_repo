import { useState } from "react";

export const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [username, setUsername] = useState('');
    const [adhaarCradNo, setAdhaarCradNo] = useState('');
    const [panCardNo, setPanCardNo] = useState('');
    const [address, setAddress] = useState('');
    const [isCustomer, setIsCustomer] = useState('1');

    const submitRegisterForm = async () => {

        const location = window.location.hostname;

        const data = {
            "isCustomer":isCustomer,
            "fName": firstName,
            "mName": middleName,
            "lName": lastName,
            "contactNumber": contactNo,
            "address": address,
            "adharCardNumber": adhaarCradNo,
            "panCardNumber": panCardNo,
            "email": email,
            "userName": username	
        }

        console.log(data);

        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(data)
        }

        const baseUrl: string = `http://${location}:8081/auth/signup`;

        const response = await fetch(baseUrl, config);
        
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const responseJson = await response.json();
        console.log(responseJson);
    }

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-11 mt-5">

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Register to explore more!</h5>
                        <hr />
                        <form className="row g-3">
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" 
                                        id="customer" required 
                                        onChange={e => setIsCustomer(e.target.value)} value='true'/>
                                        Customer
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" 
                                        id="maid" required 
                                        onChange={e => setIsCustomer(e.target.value)} value="false" />
                                        Maid
                                </div>
                            </div>

                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="First Name" 
                                    required onChange={e => setFirstName(e.target.value)} value={firstName}/>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Middle Name" 
                                    onChange={e => setMiddleName(e.target.value)} value={middleName}/>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Last Name" 
                                    required onChange={e => setLastName(e.target.value)} value={lastName}/>
                            </div>
                            <div className="col-md-4">
                                <input type="email" className="form-control" placeholder="Email" 
                                    required onChange={e => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Contact No." 
                                    required onChange={e => setContactNo(e.target.value)} value={contactNo}/>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="User name to use while login" 
                                    required onChange={e => setUsername(e.target.value)} value={username}/>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Adhaar Crad No." 
                                    required onChange={e => setAdhaarCradNo(e.target.value)} value={adhaarCradNo}/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Pan Card No." 
                                    required onChange={e => setPanCardNo(e.target.value)} value={panCardNo}/>
                            </div>
                            <div className="col-md-12">
                                <textarea className="form-control" rows={3} placeholder="Address"
                                    required onChange={e => setAddress(e.target.value)} value={address}></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn main-color text-white" onClick={submitRegisterForm}>Submit</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}