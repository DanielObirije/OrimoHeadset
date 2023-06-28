import React, { useEffect, useState } from 'react'
import {addDoc, collection, deleteDoc , doc} from 'firebase/firestore'
import { db ,auth } from '../firebase-config'
import { getDocs  } from 'firebase/firestore'
import { useStateValue } from '../StateProvider'

function Commentsection() { 
   const [textpost,settextpost] = useState('')
   const [postLists,setpostLists] = useState([])
   const postCollectionRef = collection(db,'Posts')
   const [{user},dispatch] = useStateValue()
 

  
   


//   .....create a post ........

         const createPost= async()=>{
            
         await addDoc(postCollectionRef,{textpost, author:{name: auth.currentUser.displayName,
            id: auth.currentUser.uid, URL:auth.currentUser.photoURL}})
            
            settextpost('')
         }


//   .....create a post ........



    //   .....displaying a post ........

         useEffect(()=>{
            const getPosts= async()=>{
               const data = await getDocs(postCollectionRef)
               setpostLists( data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
            
            }
            getPosts()
         },[postLists])

    
    //   .....displaying a post ........

    

    //   .....delete a post ........
            const deletePost= async(id)=>{
            
               const postDoc = doc(db,'Posts',id)
               await deleteDoc(postDoc)
            }

    //   .....delete a post ........


  return (
     <section className='comment_container section '>
         <article className=' container'>
         <div className='input-container'>
            <div className='input-box'>
               <div className='input-info'>
                  <img src={user.photoURL} className='comment-img'/>
                 <input  placeholder='What is happening ?..' value={textpost} onChange={(event)=> settextpost(event.target.value) } 
                 className='comment-area  container'/>
               </div>
               <div className='socialmedia-box'>
                  <ul className='socialmedia' >
                     <i class="uil uil-camera"></i>
                     <i class="uil uil-image"></i>
                     <i class="uil uil-map-marker"></i>
                     <i class="uil uil-smile"></i>
                     <i class="uil uil-code-branch"></i>
                  </ul>
                  <div> <button onClick={createPost} className='button button--flex'>Post</button></div>
               </div>
            </div>
         </div>
          
         
         {/* ========== posts ======== */}
           
           {

          postLists && postLists.map((post)=> <>
            
         
           <div className='mainbox_container'>
          
            <div className='comment-info'>
                  <img src={post.author.URL} className='comment-img'/>
                  <h4 className='comment-header'>{post.author.name}</h4>
                 {post.author.id === auth.currentUser.uid && <div className='trash' onClick={()=> deletePost(post.id)}>
                     <i class="uil uil-trash-alt"></i>
                  </div>
                  }
               
                </div>
                     <div className='comment-div'>
                     <p className='comment-text'>{post.textpost}</p>
                     </div>
               
                     <div className='comment-socal-media-container'>
                        <ul className='comment-socal-media'>
                           <li className='comment-socal-media-link'><i class="uil uil-thumbs-up"></i> Like </li>
                           <li className='comment-socal-media-link'><i class="uil uil-comment-dots"></i> Share</li>
                           <li className='comment-socal-media-link'><i class="uil uil-share"></i> Share</li>
                        </ul>
      
                     </div>
               <div>
 
            </div>
            
            
            </div>
       
            
            </>)
           }
         
         {/* ========== posts ======== */}
        
           </article>
     </section>
  )
}

export default Commentsection
