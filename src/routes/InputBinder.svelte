<script>
    import { onDestroy } from "svelte";

    export let numOne = 0;
    export let numTwo = 0;
    let userHasTyped = false;
    $: added = parseInt(numOne) + parseInt(numTwo);
    $: double = added * 2;
    $: console.log(parseInt(numOne) + " " + parseInt(numTwo));

    function increaseNums() {
        if (userHasTyped === true) {
            clearInterval(interval);
        } 
        else {
            let rng = Math.floor(Math.random() * 10);
            console.log(rng);
            if (rng >= 7) {numOne = parseInt(numOne) + 1;}
            if (rng < 4) {numTwo = parseInt(numTwo) + 1;}
        }
    }
    const interval = setInterval(increaseNums, 1000);

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<input
    class=" bg-fadedpink rounded-2xl p-5 flex text-center m-auto text-xl my-5 text-red-400 w-[400px]"
    type="number"
    bind:value={numOne}
    on:input={() => userHasTyped = true}
/>
<input
    class=" bg-fadedblue rounded-2xl p-5 flex text-center m-auto text-xl my-5 text-red-400 w-[400px]"
    type="number"
    bind:value={numTwo}
    on:input={() => userHasTyped = true}
/>

<p class="text-2xl font-extrabold text-center text-slate-300">
    {parseInt(numOne)} + {parseInt(numTwo)} = {added}
</p>
<p class="text-2xl font-extrabold text-center text-slate-300">
    {added} × 2 = {parseInt(double)}
</p>
