function PurchaseOrder(){
    const [message, setMessage] = useState('');
    //const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/add/purchaseOrder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
    
        const data = await res.json();
        if (res.ok) {
          setMessage(`✅ Purchase Order Save`);
        } else {
          setMessage(`❌ Order Not save`);
        }
      };
    return (
        <div>
    
            <h2>Purchase Order Form</h2>
    
            <form onSubmit={handleSubmit}>
                <label for="poNumber">PO Number:</label>
                <input type="text" id="poNumber" name="poNumber" onChange={handleChange} required /><br /><br />
    
                <label for="poDate">Date:</label>
                <input type="date" id="poDate" name="poDate" onChange={handleChange} required /><br /><br />
    
                <label for="supplierName">Supplier Name:</label>
                <input type="text" id="supplierName" name="supplierName" onChange={handleChange} required /><br /><br />
    
                <label for="supplierAddress">Supplier Address:</label>
                <input type="text" id="supplierAddress" name="supplierAddress" onChange={handleChange} /><br /><br />
    
                <h3>Items</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Item Description</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody id="itemsTable">
                        <tr>
                            <td><input type="text" name="items[0][description]" required onChange={handleChange}/></td>
                            <td><input type="number" name="items[0][quantity]" min="1" required onChange={handleChange}/></td>
                            <td><input type="number" name="items[0][unitPrice]" step="0.01" required onChange={handleChange}/></td>
                            <td><input type="number" name="items[0][total]" step="0.01" readonly onChange={handleChange}/></td>
                        </tr>
                    </tbody>
                </table>
    
                {/* <button type="button" onclick="addItem()">Add Item</button><br /><br /> */}
    
                <label for="grandTotal"><strong>Grand Total:</strong></label>
                <input type="number" id="grandTotal" name="grandTotal" readonly /><br /><br />
    
                <button type="submit">Generate Purchase Order</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default PurchaseOrder;



