import styles from "./EditResident.module.scss";

export function EditResident(){

    return (
        <div id="editResident" className={styles.editResident}>
            <div className={styles.formHeader}>
                <h2>Edit Tenant Information</h2>
            </div>
            <form id={styles.editTenantForm}>
                <div className={styles.formElement}>
                    <label htmlFor="customerId">Customer Id:</label>
                    <input type="text" id="customerId" name="customerId" disabled value="CU-00001"/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter tenant's full name" required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="idCard">ID Card:</label>
                    <input type="text" id="idCard" name="idCard" placeholder="Enter tenant's ID Card" required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" placeholder="Enter tenant's address" required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter tenant's email" required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="dateStart">Rental Start Date:</label>
                    <input type="date" id="dateStart" name="dateStart" required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="dateEnd">Rental End Date:</label>
                    <input type="date" id="dateEnd" name="dateStart" required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="dateEnd">Contract type:</label>
                    <select>
                        <option value="1">Long term</option>
                        <option value="2">Short term</option>
                        <option value="3">Monthly</option>
                    </select>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="numResidents">Number of Residents:</label>
                    <input type="number" id="numResidents" name="numResidents" placeholder="Enter number of people"
                           required/>
                </div>

                <div className={styles.formElement}>
                    <label htmlFor="additional">Additional notes:</label>
                    <textarea id="additional"></textarea>
                </div>

                <div className={styles.formElement}>
                    <label>Payment status:</label>
                    <div className={styles.paymentType}>
                        <label htmlFor="payment1"><input type="radio" id="payment1" name="payment" value="0"/>Fully paid</label>

                        <label htmlFor="payment2"><input type="radio" id="payment2" name="payment" value="0"/>Not paid
                            in full</label>
                    </div>
                </div>

                <div className={styles.btnSubmit}>
                    <button type="submit" className={styles.btnSave}>Save Changes</button>
                </div>
            </form>
        </div>
    );
}