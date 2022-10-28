import React from 'react';

function toggleClass() {
const b = document.querySelector('.file');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

b.addEventListener('click',()=> {
        box1.classList.toggle('page1')
         if(!box1.classList.contains('page1')){
             box1.classList.add('page1Q')
        }else{
            box1.classList.remove('page1Q')
        }

        box2.classList.toggle('page2')
        if(!box2.classList.contains('page2')){
            box2.classList.add('page2Q')
       }else{
           box2.classList.remove('page2Q')
       }

        box3.classList.toggle('page3')
        if(!box3.classList.contains('page3')){
            box3.classList.add('page3Q')
       }else{
           box3.classList.remove('page3Q')
       }
}); 

}

function FolderComponent() {

    return (

    <div id='folderC' className='d-flex justify-content-center'>

<div className="background">
	<div className="file" onClick={toggleClass}>
		<div className="page box1">
        <a href='#'>
		  <h4>Item 1</h4>
        </a>
		</div>
		<div className="page box2">
		  <h4>Item 2</h4>
		</div>
		<div className="page box3">
		  <h4>Item 3</h4>
		</div> 
	</div>
  <h2>Double click over the folder</h2>
</div>
         
    </div>
    )
}
export default FolderComponent