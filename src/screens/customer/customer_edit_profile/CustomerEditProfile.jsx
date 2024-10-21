import "./CustomerEditProfile.scss";

const CustomerEditProfile = () => {
    return (
        <div className="container">
            <h1>Customer Edit Profile</h1>
            <form>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="customer-id">Customer Id:</label>
                        <input type="text" id="customer-id" placeholder="CU-00001" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id-card">ID Card:</label>
                        <input type="text" id="id-card" placeholder="Enter tenant's ID Card" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone-number">Phone Number:</label>
                        <input type="text" id="phone-number" placeholder="Enter phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rental-start">Rental Start Date:</label>
                        <input type="date" id="rental-start" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contract-type">Contract Type:</label>
                        <select id="contract-type">
                            <option value="long-term">Long term</option>
                            <option value="short-term">Short term</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="full-name">Full Name:</label>
                        <input type="text" id="full-name" placeholder="Enter tenant's full name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" placeholder="Enter tenant's address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter tenant's email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rental-end">Rental End Date:</label>
                        <input type="date" id="rental-end" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="residents">Number of Residents:</label>
                        <input type="number" id="residents" placeholder="Enter number of people" />
                    </div>
                    <div className="form-group">
                        <label>Payment Status:</label>
                        <div className="payment-status">
                            <div className="payment-option">
                                <input type="radio" id="fully-paid" name="payment-status" value="fully-paid"
                                       defaultChecked/>
                                <label htmlFor="fully-paid">Fully paid</label>
                            </div>
                            <div className="payment-option">
                                <input type="radio" id="not-paid" name="payment-status" value="not-paid"/>
                                <label htmlFor="not-paid">Not paid in full</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="additional-notes">Additional Notes:</label>
                        <textarea id="additional-notes" rows="4" placeholder="Enter additional notes"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn">Save Changes</button>
            </form>
        </div>
    );
};

export default CustomerEditProfile;
