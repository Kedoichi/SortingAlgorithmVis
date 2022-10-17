// Create bubbleSort async function
async function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if(isStop) return;
            await startSwapUI(list[j],list[j+1]);
            if (list[j] > list[j + 1]) {
                swaparr(list, j, j + 1);
                await swapUI(list[j],list[j+1]);
            }
            await endSwapUI(list[j],list[j+1]);
        }
    }
    
}


// Create enhancedBubbleSort async function
async function enhancedBubbleSort(list) {
    var swapped = true;
    for (let i = 0; i < list.length && swapped; i++) {
        swapped = false;
        for (let j = 0; j < list.length - i - 1; j++) {
            if(isStop) return;
            await startSwapUI(j,j+1);
            if (list[j] > list[j + 1]) {
                await swapUI(j,j+1);
                swaparr(list, j, j + 1);
                swapped = true;
            }
            await endSwapUI(j,j+1);
        }
    }
}
