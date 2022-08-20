import axios from 'axios'


export const API = {
    Contact: {
        async getAll (token) {
            return await axios.get("/contactus/get_all", { headers: { Authorization: `Bearer ${token}` }})
        }
    },
    DeleteContact: {
        async deleteContactInfo(id, token){
            return await axios.delete(`/contactus/delete_contact_info/${id}`,
            { headers: { Authorization: `Bearer ${token}` }})
        }
    },
    ReviewGetAllData: {
        async getAll(token){
            return await axios.get(`/reviews/get_all`, { headers: { Authorization: `Bearer ${token}` }})
        }
    },
    ReviewSetStatus: {
        setReviewStatus(id, token){
            return axios.post(`/reviews/set_review_status/${id}`, { headers: { Authorization: `Bearer ${token}` }})
        }
    },
    ReviewDelete: {
        async deleteReview(id, token){
            return await axios.delete(`/reviews/delete_review/${id}`, { headers: { Authorization: `Bearer ${token}` }})
        }
    },
    ReviewGetAllStatus: {
        getAllStatus(){
            return axios.get(`/reviews/get_all_status`);
        }
    },
    ReviewSubmitReview: {
        async submitReview(data){
            return axios.post(`/reviews/submit_review`, data);
        }
    }
}