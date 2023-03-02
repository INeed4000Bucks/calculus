<script>
    import InputBinder from "./InputBinder.svelte";
    let name = "{name}";
    let count = 0;
    const forbiddenName = "bob";

    let numbers = [1, 2];
    let sum = 3;
    function addNumber() {
        count++;
        numbers.push(numbers.length + 1);
        console.log(numbers);
        let x = 0
        for (let i = 0; i < numbers.length; i++) {
            x += numbers[i];
        }
        sum = x
        numbers = numbers
    }

    function dont() {
        console.log("we Don't talk about that guy");
    }

    function returnBob(x) {
        if (x.toLowerCase() === forbiddenName) {
            return "we don't talk about that guy";
        } else {
            return ", someone...";
        }
    }

    function returnILY(x) {
        if (x.toLowerCase() === forbiddenName) {
            return "I love you, but ";
        } else {
            return "I love you";
        }
    }
</script>

<h1 class="text-2xl text-center text-slate-100">
    {returnILY(name)}
    {name.toLowerCase() !== "bob" ? name : returnBob(name)}!
</h1>

<input
    class=" bg-fadedblue h-[64px] w-[456px] flex m-auto mt-7 rounded-3xl text-2xl text-slate-100 px-4"
    type="text"
    on:input={(e) => {
        name = e.target.value;
        name.toLowerCase() === forbiddenName ? dont() : 1;
    }}
/>
<button
    class=" bg-fuchsia-200 p-2 rounded-md flex mt-5 m-auto text-2xl"
    on:click={addNumber}
    >Clicked {count} {count === 1 ? "time" : "times"}</button
>
<p class="text-center mt-5 text-xl text-slate-400">
    {numbers.join(" + ")} = {sum}
</p>
<InputBinder numOne="0" numTwo="0" />
