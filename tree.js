const btn = document.querySelector('#btn');        
            const radioButtons = document.querySelectorAll('input[name="size"]');
            btn.addEventListener("click", () => {
                let selectedSize;
                for (const radioButton of radioButtons) {
                    if (radioButton.checked) {
                        selectedSize = radioButton.value;
                        break;
                    }
                }
                // show the output:
                output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
            });