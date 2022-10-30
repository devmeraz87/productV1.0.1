(function() {
    const allProductCardCounter = document.querySelectorAll("._product_cart_counter");
    const cards = document.querySelectorAll("._product");



    var productCounter = {
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

        resetCount: function() {
            return this.count = 1
        }
    };


    allProductCardCounter.forEach(counter => {
        counter.addEventListener("click", (e) => {
            e.preventDefault();

            // >> Decrase value
            if(e.target.classList.contains("_decrase_btn")) {
                const input = e.target.nextElementSibling;
                input.value = productCounter.decrementCounter();
            }

            // >> incrase value
            if(e.target.classList.contains("_incrase_btn")) {
                const input = e.target.previousElementSibling;
                input.value = productCounter.incrementCounter();
            }
        })
    })

    
    cards.forEach(card => {
        card.addEventListener("mouseleave", () => {
            const __ = card.querySelector("._counter_input");
            __.value = productCounter.resetCount();
        })
    })

    const __loves = document.querySelectorAll("._product_fev");

    __loves.forEach(_love => {
        _love.addEventListener("click", () => {
            _love.firstElementChild.firstElementChild.style.fill = "red";
            _love.firstElementChild.firstElementChild.style.color = "red";
        })
    })

})()