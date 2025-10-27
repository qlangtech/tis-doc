# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus 2 documentation website for TIS (零代码乐高式搭建数据管道), a no-code data pipeline platform. The site is primarily in Chinese and provides documentation, examples, and guides for the TIS platform.

## Development Commands

### Installation
```bash
yarn
```

### Local Development
```bash
yarn start
```
Starts a local development server at http://localhost:3000 with live reload.

### Build
```bash
yarn build
```
Generates static content into the `build` directory.

### Serve Built Site
```bash
yarn serve
```
Serves the built site locally for testing.

### Clear Cache
```bash
yarn clear
```
Clears Docusaurus cache when experiencing build issues.

### Deployment
```bash
# Using SSH
USE_SSH=true yarn deploy

# Using GitHub username
GIT_USER=<Your GitHub username> yarn deploy
```

## Project Structure

- **docs/**: Main documentation content organized by categories:
  - `guide/`: User guides and tutorials
  - `example/`: Usage examples and case studies
  - `develop/`: Development documentation
  - `enhance-extra/`: Additional features and enhancements
  - `co-construction/`: Community collaboration content
- **versioned_docs/**: Version-specific documentation (v4.2.0, v4.3.0)
- **versioned_sidebars/**: Version-specific sidebar configurations
- **src/**: Custom React components and pages
  - `components/`: Reusable React components
  - `pages/`: Static pages
  - `css/`: Custom CSS styles
- **blog/**: Blog posts and announcements
- **static/**: Static assets (images, files, external libraries)

## Configuration

- **docusaurus.config.js**: Main Docusaurus configuration with site metadata, theme settings, and plugin configuration
- **sidebars.js**: Sidebar navigation structure (uses auto-generation from file structure)
- **versions.json**: Available documentation versions

## Key Features

- Versioned documentation with dropdown navigation
- Chinese language content with English UI elements
- Google Analytics integration (UA-140709779-1)
- Custom CSS with Prism syntax highlighting for Java
- External JavaScript libraries (jQuery, Fancybox) for enhanced functionality
- GitHub Pages deployment support

## Working with Versions

The site uses Docusaurus versioning with `includeCurrentVersion: false`, meaning only versioned docs are displayed. Current versions are 4.2.0 and 4.3.0.

## Content Guidelines

- Documentation is primarily in Chinese
- Follow the existing file structure under docs/ directories
- Use MDX format for enhanced Markdown with React components
- Images should be placed in docs/images/ or static/img/