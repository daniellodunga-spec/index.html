# SpendWise - JavaScript Foundation

This project is where I bring the SpendWise budget tracker to life using JavaScript. It’s all about making the app interactive—allowing regular users to punch in their budget and spending details, see their remaining balance calculated automatically, and get a nice financial summary right in the browser console.

## What's Under the Hood

I’ve put together a few core JavaScript concepts to make this work:

* **Storing Info with Variables:** I used `const` to keep things secure and unchanging once the data is set, like the budget and expense totals.
* **Handling Data:** Everything starts as a simple text input from the user, but I used `parseFloat()` to convert those numbers so we can do accurate math.
* **User Prompts:** I'm using standard browser `prompt()` boxes to ask the user for their numbers.
* **Doing the Math:** The code simply takes the total budget and subtracts the total expenses.
* **Using Functions:** I built a specific function called `calculateRemainingBalance()` to handle the math. It keeps everything clean, organized, and easy to reuse if I want to expand the app later.

## How It Works

1. **The Setup:** When you run the app, pop-up prompts will ask you for your total budget and what you've spent.
2. **The Calculation:** The app passes those numbers into the function to work out what's left over.
3. **The Results:** You’ll get a clear, labeled SpendWise summary in your developer console showing exactly where your finances stand.

To see it in action, just open the `index.html` file in your browser, fill in the prompts, and check the console.
