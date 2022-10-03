module.exports = {
    branches: [
        {
            name: "master",
            level: "patch",
            devDependencies: ["@zowe/imperative"]
        },
        {
            name: "update-workflows",
            level: "patch",
            prerelease: true,
            devDependencies: {
                "@zowe/imperative": "zowe-v1-lts"
            }
        }
    ],
    plugins: [
        "@octorelease/changelog",
        ["@octorelease/npm", {
            npmPublish: false,
            tarballDir: "dist",
            aliasTags: {
                latest: ["zowe-v1-lts"]
            },
            pruneShrinkwrap: true
        }],
        ["@octorelease/github", {
            assets: "dist/*.tgz",
            checkPrLabels: true
        }],
        "@octorelease/git"
    ]
};
