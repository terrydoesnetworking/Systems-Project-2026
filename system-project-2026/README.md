# Starting on Systems Project 2026
    
    Hello teammates, I would like to address some of the things you will have to do when cloning
    this project. This is a loose idea what what you will need to do so if I am missing something or 
    if you ran into a different issue please address me so I can help you and I can update the Readme.txt 
    to reflect the issue

    Step 1: Step one would be to make sure you have Node Package Manager (npm) installed on your system

        to do this on a windows machine you can open powershell and run: 
        ```sh
        # installing npm        
        winget install OpenJS.NodeJS.LTS
        ```
        then verify your install with:
        ```sh
        # verifying install
        node -v
        npm -v
        ```    
        note: if you cannot use the command still try closing and opening your powershell instance
        
        if you are still having issues running these commands try running `Set-ExecutionPolicy RemoteSigned` 
        as administrator in powershell

    Step 2: If you now have powershell installed on your system then you can use npm to install all the dependancies needed for this project (it is alot but we can cull the herd when we figure out what we dont want)

        to do this you can start by opening the terminal in the folder of the project (you should see things in the folder like src, README.txt, etc.) and then running the command:
        ```sh
        # install dependancies 
        npm install
        ```
        this should install the dependancies needed for this project. 

        side note: you can use VScode to do alot of this so you are not going from your text editor to a terminal
        if you are unsure how you can ask me and I can tell you but googling it should suffice.

    Step 3: Now you have the dependancies for the project, it is time to set up Better Auth. This can get confusing but it is easy. In the project folder you will find a .env.example file, I want you to copy that file and paste it in the same folder but instead name it .env 

        Now you should have a .env file and a .env.example file. Now I want you to open the .env.example file in your text editor and open the link. On the link it will have a step by step provedure to set this up but if you want to skip all of that go to Step 2 Set Environment Varibles and you will see a Generate Secret button. Click that and then copy the output. 

        Paste the output into your .env file and it should look like this
        ```sh
        BETTER_AUTH_SECRET="example"
        ```
        or 
        ```sh
        BETTER_AUTH_SECRET="QLLxW1z454AjUVeZYe4soX8W79qwUdI6"           <only a example cannot be used>
        ```

    From here the project should be up to par, if you are interested in seeing it run try running the command:
    ```sh
    npm run dev
    ```
    Let me know if there is anything I can help with this process and if you had any issues with the process as well.


# Dont worry about this stuff atm

# Svelte library

Everything you need to build a Svelte library, powered by [`sv`](https://npmjs.com/package/sv).

Read more about creating a library [in the docs](https://svelte.dev/docs/kit/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.15.1 create --template library --types ts --add tailwindcss="plugins:typography,forms" better-auth="demo:password" paraglide="languageTags:en, es+demo:yes" storybook mdsvex drizzle="database:mysql+mysql:mysql2+docker:yes" playwright vitest="usages:unit,component" prettier --install npm system-project-2026
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```sh
npm pack
```

To create a production version of your showcase app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```sh
npm publish
```
