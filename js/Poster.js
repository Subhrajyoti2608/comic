AFRAME.registerComponent("poster",{
    init: function(){
        this.bookContainer = this.el;
        this.createCards()
    },
    createCards: function(){
        const thumbNailsRef = [
            {
                id:"feluda-indrajal-rahasya",
                title:"Indrajal Rahasya",
                url:"./assets/thumbnails/indrajal.png"
            },
            {
                id:"feluda-gangtok",
                title:"Gangtoke Gondogol",
                url:"https://rukminim1.flixcart.com/image/850/1000/kgcl7680/book/2/4/5/gangtoke-gandagol-comics-original-imafwmfdcgfh36hc.jpeg?q=90"
            },
            {
                id:"professor-shanku",
                title:"Mystrey Of Bird",
                url:"https://boichitro.in/wp-content/uploads/2021/07/original1.1791321.1.jpg"
            },
            {
                id:"shanku-ekshringo",
                title:"Adventure of Himalaya",
                url:"https://rukminim1.flixcart.com/image/416/416/xif0q/regionalbooks/v/w/m/professor-shanku-comics-ekshringa-abhijan-original-imaggupspkgtbhqb.jpeg?q=70"
            },
            
        ];
        let previousXposition = -60;

        for (var item of thumbNailsRef){
            const posX = previousXposition + 25;
            const posY = 10;
            const posZ = -40;
            const position={x:posX, y:posY, z:posZ}

            previousXposition = posX

            const borderEl = this.createBorders(position,item.id)
      // Thumbnail Element
     const thumbEl = this.createThumbnail(item)
     borderEl.appendChild(thumbEl)
      // Title Text Element
      const titleEl = this.createTitle(position,item)
      borderEl.appendChild(titleEl)


      this.bookContainer.appendChild(borderEl);
        }


    },
    createBorders: function(position,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
        entityEl.setAttribute("material",{color:"#0077cc",opacity:1})
    
        return entityEl
      },
      createThumbnail: function(item){
        const entityEl = document.createElement("a-entity")
       
        entityEl.setAttribute("visible", true)
        
        entityEl.setAttribute("geometry",{primitive:"circle",radius:9})
        entityEl.setAttribute("material",{src:item.url})
    
        return entityEl
      },
      createTitle: function(position,item){
        const entityEl = document.createElement("a-entity")
    
        entityEl.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"#e65100",value:item.title})
        
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("position",position)
        
        
    
        return entityEl
      },
    
})