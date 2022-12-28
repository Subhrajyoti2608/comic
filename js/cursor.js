AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId:{default:"",type:"string"}
    },
    init: function(){
        this.handleEnterEvent()
        this.handleLeaveEvent()
    },
    handleEnterEvent: function(){
        this.el.addEventListener("mouseenter",()=>{
            this.listOfStates()
        })
    },
    handleLeaveEvent: function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
            const el = document.querySelector(`#${selectedItemId}`)
            const id = el.getAttribute("id")
            if(id==selectedItemId){
                el.setAttribute("material",{color:"#0077cc",opacity:1})
            }
            }
        })
    },
    listOfStates: function(){
        const id = this.el.getAttribute("id")
        const bookId = ["feluda-indrajal-rahasya","feluda-gangtok","professor-shanku","shanku-ekshringo"]

        if(bookId.includes(id)){
            const bookContainer = this.document.querySelector("#book-container")
            bookContainer.setAttribute("cursor-listener",{selectedItemId:id})
            bookContainer.setAttribute("material",{color:"d76b30",opacity:1})
        }
    }
})