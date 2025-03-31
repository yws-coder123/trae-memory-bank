# Cursor Memory Bank System: Installation Guide

> This guide provides step-by-step instructions for installing and setting up the Cursor Memory Bank System.

## Prerequisites

- [Cursor IDE](https://cursor.com/) installed
- Basic understanding of file systems and terminal commands
- Project where you want to implement the Memory Bank System

## Installation Steps

### 1. Clone the Repository

Clone this repository into your project or download the files directly:

```bash
# From your project's root directory
git clone https://github.com/vanzan01/cursor-memory-bank.git
```

### 2. Set Up the Rule Structure in Your Project

Cursor's new rule format uses a `.cursor/rules` folder structure for organizing custom rules. You need to:

- Copy the entire `.cursor/rules` folder from this repository to your project
- If you already have a `.cursor/rules` folder in your project, you'll need to copy the required rules from this repository into your existing folder

### 3. Configure User Rules in Cursor

You still need to add the global rules to Cursor's User Rules section:

- **Copy the global-rules.md content**: The file contains essential instructions for the AI assistant to follow
- **Open Cursor Settings**: Click on the gear icon in the bottom left or use keyboard shortcut Ctrl+, (Windows/Linux) or Cmd+, (Mac)
- **Navigate to User Rules**: Go to Cursor Settings > Rules > User Rules (editable section)
- **Paste the global-rules.md content**: Copy and paste the entire content of global-rules.md into the User Rules text box
- **Save your settings**: Click "Save" or "Apply" to activate the rules

### 4. Verify Your Configuration
- Go to Cursor > Rules
- Scroll to the bottom
- You should see all your configured rules listed there

### 5. Initialize the System

Initialize the system with a simple "VAN" command in the Cursor AI chat. This will:
- Verify all required files and directories exist
- Create any missing components
- Set up the Memory Bank structure

### 6. Start Using Your AI with Persistent Memory

After initialization, you can begin using the "VAN" command followed by your task description:

```
VAN I need to add a basic README file to my project
```

## Directory Structure

After setup, your project should have this structure:

```
.cursor/
└── rules/
    ├── main.mdc                      # Master control file with references
    ├── system-overview.mdc           # High-level system overview
    │
    ├── Core Implementation/          # Core rule implementations
    │   ├── creative-phase-enforcement.mdc   # Hard enforcement mechanisms
    │   ├── creative-phase-metrics.mdc       # Quality metrics framework
    │   └── [other core files]              # Additional implementation files
    │
    ├── Extended Details/             # Detailed examples and references
    │   ├── creative-phase-examples.mdc      # Example creative phases
    │   └── [other example files]           # Additional example files
    │
    └── Templates/                    # Document templates

Project Root:
├── memory-bank/                # Primary memory storage
│   ├── projectbrief.md         # Project requirements and goals
│   ├── productContext.md       # Why this project exists
│   ├── activeContext.md        # Current work focus
│   ├── systemPatterns.md       # Architecture patterns
│   ├── techContext.md          # Technologies used
│   ├── progress.md             # Implementation status
│   └── tasks.md                # SINGLE SOURCE OF TRUTH for task tracking
├── .cursorrules                # Project-specific patterns
└── docs/
    └── archive/
        └── completed_tasks.md  # Archived completed tasks
```

## Troubleshooting

### Common Issues

1. **AI doesn't respond with "OK VAN"**
   - Ensure the global rules are correctly set in Cursor settings
   - Restart Cursor and try again

2. **.cursorrules created as a directory**
   - Remove the directory: `rm -rf .cursorrules`
   - Create as a file instead: `touch .cursorrules`

3. **Missing files warnings**
   - Check if all required files and directories exist
   - Let the AI create any missing files automatically

4. **Command execution issues**
   - Ensure you're allowing the AI to execute one command at a time
   - Don't modify commands to include chaining (&&, ;, etc.)

## Next Steps

After installation:

1. Review the [README.md](../README.md) for detailed system documentation
2. Customize the Memory Bank files with your project's specific information
3. Begin using the "VAN" command to initiate tasks with the AI

## Adaptive Complexity Levels

The system scales across four complexity levels:

1. **Level 1: Quick Bug Fix**
   - Simple errors, UI glitches, minor issues
   - Streamlined process with targeted documentation
   - 2-3 task updates (start/fix/end)
   - Focus: Fix the specific issue

2. **Level 2: Simple Enhancement**
   - Small features, minor improvements
   - Basic process with essential documentation
   - 4-6 task updates at key milestones
   - Focus: Clean implementation with clear documentation

3. **Level 3: Intermediate Feature**
   - Complete features, significant changes
   - Standard process with full section tracking
   - 8-12 task updates at defined points
   - Focus: Comprehensive planning and documentation

4. **Level 4: Complex System**
   - Major systems, architectural changes
   - Full formal process with detailed checkpoints
   - 15+ task updates with formal verification
   - Focus: Architectural integrity and complete documentation

## Support

If you encounter issues with the installation:

1. Check the [Common Implementation Challenges](../README.md#-common-implementation-challenges) section in the README
2. Ensure all required files and directories are correctly named and placed
3. Open an issue on the [GitHub repository](https://github.com/vanzan01/cursor-memory-bank/issues) 