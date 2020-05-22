import React from 'react';



export default function ImageUpload(props) {

  const checkUploadResult = (resultEvent) => {
    //   console.log(resultEvent)
        if(resultEvent.event === "success"){
            

            console.log( resultEvent.info.secure_url)
            props.getPicture(resultEvent.info.secure_url);
        //     this.props.postPhoto({user_id: this.props.currentUser.id,
        //     caption:'',
        // url: resultEvent.info.secure_url})
        // .then(this.props.history.push('/profile'))
        }
    }

   const showWidget = (widget) => {
        widget.open()
    }

        let widget = window.cloudinary.createUploadWidget({
            cloudName: "amzap",
            uploadPreset:"ylmdvnpt",
        },
            (error, result) => { checkUploadResult(result) })
            
        
    
    return (
        <div id='photo-form-container'>
            <button onClick={() =>  showWidget(widget)}>Upload Photo</button>
        </div>
        )
        }

