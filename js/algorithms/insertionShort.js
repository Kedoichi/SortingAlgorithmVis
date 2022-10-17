async function insertionSort(list) {
    for (let i = 1; i < list.length; i++) {
        if(isStop) return;
        let current = list[i];
        let j = i - 1;
        while (j >= 0 && list[j] > current) {
            if(isStop) return;
            list[j + 1] = list[j];

            await swapUI(list[j],current);
            j--;
        }
        list[j + 1] = current;
    }
}