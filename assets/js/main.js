(function(){


    // >> Counter Start ========================================================================// 
    const ProductCountInput = document.querySelector(".productCountInput");
    const decraseBtn = document.querySelector("._decrase");
    const incraseBtn = document.querySelector("._incrase");


    var productCounter={
        count: 1,									
		incrementCounter:function() {
      if(this.count<100){
	        return this.count = this.count + 1;
        } else {
            alert("maximum limit reached, you can buy only 100 items");
            return this.count;
        }
      
	    },
	    decrementCounter:function() {
		  	if (this.count> 1) {
		      return this.count = this.count - 1;
		    } else {
		      return this.count=1;
		    }
	    },

    };


    // >> Incrase  Value // 
    incraseBtn.onclick=function(){
        ProductCountInput.value = productCounter.incrementCounter();
    }
    
    // >> Decrase Value
    decraseBtn.onclick = function(){
        ProductCountInput.value = productCounter.decrementCounter();
    }
    // >> Counter End ========================================================================// 


    // >> change product img
    const __ = document.querySelector("._product_more_img");
    const __defaultImg = document.querySelector(".__productDefaultImg");


    __.addEventListener("click", (e) => {
        e.preventDefault();

        if(e.target.classList.contains("_js_more_product_img")) {
            const imgSource = e.target.getAttribute("href");
            __defaultImg.setAttribute("src", imgSource);
        } else {
            return;
        }
    })



    // >> Modal Fnc =====================================================================
    const modal = document.querySelector("._modal");
    // >> Modal
    __defaultImg.addEventListener("click", () => {

        // Create Image Array  /    
        const imgArr = Array.from(document.querySelector("._product_more_img").children);
        const modalImgTag = document.querySelector("._modal_img img");
        const nextBtn = document.querySelector("._next");
        const prevBtn = document.querySelector("._prev");


        imgAttribute = __defaultImg.getAttribute("src");


        modalImgTag.setAttribute("src", imgAttribute)


        var ModalImageSlideINC_DEC = {

            count: 0,									

            incrementCounter:function() {

          if(this.count < imgArr.length - 1){
                return this.count = this.count + 1;
            } else {
                return this.count;
            }
          
            },
            decrementCounter:function() {
                  if (this.count> 0) {
                  return this.count = this.count - 1;
                } else {
                  return this.count = 0;
                }
            },
        };

        // >> Next Img
        nextBtn.addEventListener("click", () => {
            const plusIndex = ModalImageSlideINC_DEC.incrementCounter();

                imgArr.forEach((img, index) => {

                const imgPath = img.pathname;
        
                    if(index === plusIndex) {
                        modalImgTag.setAttribute("src", imgPath)
                        console.log(plusIndex);
                    }
                })
        })

        // >> Prev Img
        prevBtn.addEventListener("click", () => {
                const mainasIndex = ModalImageSlideINC_DEC.decrementCounter();

                imgArr.forEach((img, index) => {
                    const imgPath = img.pathname;
        
                    if(index === mainasIndex) {
                        modalImgTag.setAttribute("src", imgPath)
                        console.log(mainasIndex);
                    }
                })
        })


        // >> Open modal
        modal.classList.add("_modal_active");

        // >> Close modal
        const modal_close_btn = document.querySelector("._js_modal_close_btn");
        modal_close_btn.addEventListener("click", () => {
            modal.classList.remove("_modal_active");
            console.log("clicked");
        })
    })

})()