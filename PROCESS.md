# 1/6/2024

## Navbar

#### To create the navbar for my portfolio website, I decided to utilize Tailwind CSS. Here's how I approached building it:

### Font Configuration

I initially configured the font family in the `tailwind.config.js` file, opting for the theme bracket to set it as a default without specifying the font name for every element. However, this approach didn't work as expected, so I later moved the `configuration` to the `extend` bracket. This underscores the importance of practical experimentation in determining what works.

### Light/Dark Mode Implementation

Next, I wanted to incorporate a dark and light mode into my website. Although I had done it with SCSS previously, adapting it to a React app with Tailwind CSS posed a new challenge. I found useful guides for building a toggle switch and implementing dark mode:

- [Tailwind CSS | Dark & Light Theme Switcher](https://www.youtube.com/watch?v=oMOe_32M6ss&ab_channel=JohnKomarnicki)
- [Tailwind CSS Dark Mode | React App Theme Switcher](https://www.youtube.com/watch?v=VylXkPy-MIc&ab_channel=OverClocked)
- [Tailwind CSS Dark/Light/System Base Change Theme With Local Storage | React js dark mode](https://www.youtube.com/watch?v=NMTq5HIxMa8&ab_channel=CodeAProgram)

After a bit of struggle, I successfully added the dark mode toggle switch, incorporating resources from [Lokesh-Sharma](https://www.linkedin.com/pulse/creating-dark-light-mode-tailwind-css-reactjs-guide-beginners-sharma/).

# 1/7/2024

Today, I moved `useState` from the child component `{toggle}` to the parent component `{navbar}` to manipulate the logo icon based on the dark mode of the window. After testing my logic in a new branch, I was delighted to see it worked successfully.

### Adding Dark/Light Button on Mobile View

I decided to include a toggle button beside the menu icon for easy access to dark and light modes. Surprisingly, it was straightforward to implement and style for both modes, thanks to Tailwind CSS.

### Navbar-Complete

The customization for the navbar is now complete. It includes a dark/light mode button that is fully responsive and works seamlessly on both desktop and mobile views. The color scheme of the navbar can be changed using the toggle button.

##
