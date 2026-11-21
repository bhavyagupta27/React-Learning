import { useState } from "react";
export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
            ;
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addNewComment(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        });
    };

    return (
        <>
            <div>
                <h4>Give a comment.</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input name="username" placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" />
                    <br></br>
                    <br></br>
                    <label htmlFor="remarks">Remarks</label>
                    <textarea
                        name="remarks"
                        placeholder="Remarks"
                        value={formData.remarks}
                        onChange={handleInputChange}
                        id="remarks"
                    />
                    <br></br>
                    <br></br>
                    <label htmlFor="rating">Rating</label>
                    <input name="rating" placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" />
                    <br></br>
                    <br></br>
                    <button>Add Comment</button>
                </form>
            </div>
        </>
    );
}