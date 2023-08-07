import AsideBar from "../pages/AsideBar";
import { useEffect, useState } from "react";

function Dashboard (){

    const [AdminUsers, setAdminUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3007/users")
        .then((resp) => resp.json())
        .then((data) => {
            setAdminUsers(data);
        });

        
    },[]);

    useEffect(() => {
        fetch("http://localhost:3007/post")
        .then((resp) => resp.json())
        .then((data) => {
            setProducts(data);
        });

        
    },[]);

    useEffect(() => {
        fetch("http://localhost:3007/comments")
        .then((resp) => resp.json())
        .then((data) => {
            setComment(data);
        });

        
    },[]);

    

    const [postsData, setPostsData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3007/post")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            const filterCategory = data.filter ((post) => {
                return post.tag === "Sport"
            } )
            setPostsData(filterCategory);
            console.log(filterCategory)
            setLoading(false)
        });
        //  console.log(productsData.length)
        
    },[]);
    


    // const [cart, setCart] = useState([]);

    // const localStorageCart = localStorage.getItem("social-cart");

    // useEffect(() => {
    //     if(localStorageCart){
    //       let CartData = JSON.parse(localStorageCart);
    //       setCart(CartData);
    //     }

    // }, []);

    return(
        <div>
            <AsideBar/>
            <div className="team-member">Team Member Dashboard</div>
            <div className="products">
                <div className="product-card green">
                   <p>Total Post ({products.length})</p>
                </div>

                <div className="product-card purple">
                    <p>Total Users ({AdminUsers.length})</p>
                </div>

                <div className="product-card blue">
                    <p>Total Comments ({comment.length})</p>
                </div>
            </div>

            <div className="product-list">
                <table>
                    <th>Post Image</th>
                    <th>Title</th>
                    <th>Tag</th>
                    <th>Description</th>
                </table>
                {loading === true ? (
                    <div>Loading please wait...</div>
                ) : (

                    postsData.slice(0,3).map((post) => (
                <table >
                    <tr key={post._id}>
                        

                        <td><img src={"http://localhost:3007/post/postimage" + post.image} alt="image" /></td>
                        <td>{post.title}</td>
                        <td>{post.tag}</td>
                        <td>{post.description}</td>
                        
                    </tr>
                </table>
                    ))

                )}

            </div>
            
        </div>
    )
}

export default Dashboard;