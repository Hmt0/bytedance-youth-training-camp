import inquirer from 'inquirer';

// 核心：自动化思维
export function question() {
    return inquirer.prompt([
        { type: "input", name: "packageName", message: "set package name"},
        { 
            type: "number",
            name: "port",
            message: "set port number",
            default: () => 8080,
        },
        {
            type: "checkbox",
            name: "middleware",
            choices: [
                {
                    name: "koaStatic",
                },
                {
                    name: "koaRouter"
                }
            ],
    
        }
    ]);
}

