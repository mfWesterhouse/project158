AFRAME.registerComponent("poster-component", {
    init: function () {
      this.placesContainer = this.el;
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "batgirl",
          title: "Batgirl",
          url: "./assets/image.png",
        },
        {
          id: "batman",
          title: "Batman",
          url: "./assets/batman_poster.jpg",
        },
        {
          id: "wonder-woman",
          title: "Wonder Woman",
          url: "./assets/wonderwoman_poster.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        const borderEl = this.createBorder(position, item.id);

        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);

        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },

    createBorder: function(position, id){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 21,
        height: 29,
        color: "white",
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "0077CC",
        opacity: 1,
      });

      entityEl.setAttribute("cursor-listener", {});

      return entityEl;
    },

    createThumbNail: function(item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28,
      });

      entityEl.setAttribute("material", {src: item.url});

      return entityEl;
    },

    createTitleEl: function(position, item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        text: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });

      const elPosition = position;
      elPosition.y = -20
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);

      return entityEl;
    },
  });