# Cursor Memory Bank System: Complete Architecture

## System Overview

The Memory Bank System is a comprehensive documentation-driven approach for AI assistants that simulates persistent memory across sessions. It addresses the fundamental limitation of LLMs forgetting context between interactions by creating a robust, structured documentation system that serves as the AI's "memory."

This architecture document provides a complete reference for implementing and maintaining the Memory Bank System, optimized for LLM processing efficiency while ensuring comprehensive documentation.

## Core Design Principles

1. **Documentation as Memory**: Documentation serves as mission-critical infrastructure
2. **Strategic Content Organization**: Balance between cohesive main files and extracted details
3. **Mandatory Verification Steps**: Explicit section checkpoints prevent steps from being skipped
4. **Single Source of Truth**: tasks.md as the authoritative source for task status tracking
5. **Platform Awareness**: Commands adapted for specific operating systems
6. **Real-Time Documentation**: Implementation details continuously added to activeContext.md

## Rule Types & Application Patterns

The system utilizes three distinct rule types, each with specific application patterns:

### 1. Always-Applied Rules
```markdown
---
description: 
globs: 
alwaysApply: true
---
```
- Applied to every command regardless of context
- Used for critical rules that must be followed in all situations
- Kept concise to minimize context window usage
- Examples: main.mdc, verification-checklist.mdc

### 2. Auto-Attached Rules
```markdown
---
description: 
globs: "**/memory-bank/**", "**/.cursorrules"
alwaysApply: false
---
```
- Automatically applied when working with matching file patterns
- Used for context-specific rules that only apply in certain situations
- Can be more detailed since they're only loaded when relevant
- Examples: memory-bank.mdc, task-tracking.mdc

### 3. Agent-Requested Rules
```markdown
---
description: CRITICAL: Contains mandatory examples for correct workflow implementation. DO NOT assume patterns without consulting this documentation.
globs: "**/src/**"
alwaysApply: false
---
```
- Agent explicitly instructed to read these files before proceeding
- Used for detailed examples, extended explanations, and verbose content
- Helps manage context window by moving details out of main files
- Examples: workflow-examples.mdc, command-examples.mdc

## Complete File Structure

### Global Rules File (Cursor Settings > General > Rules for AI)

```markdown
# Cursor's Memory-Based Assistant

I am an AI with memory that resets between sessions. I use a structured Memory Bank system to maintain context across sessions. For any task, I follow a 6-step workflow and execute commands one at a time.

## 🚨 CRITICAL FIRST STEPS
1. Identify current operating system
2. Ensure `.cursorrules` file exists
3. Ensure `memory-bank/` directory with required files exists
4. Ensure `docs/archive/` directory with `completed_tasks.md` exists

## 📚 MEMORY BANK OVERVIEW
I maintain these core files:
- `projectbrief.md` - Foundation defining requirements and goals
- `productContext.md` - Why this project exists and problems it solves
- `activeContext.md` - Current work focus and recent changes
- `systemPatterns.md` - System architecture and key technical decisions
- `techContext.md` - Technologies used and development setup
- `progress.md` - What works, what's left, and implementation details
- `tasks.md` - SINGLE SOURCE OF TRUTH for all task tracking

## 🔄 STRUCTURED WORKFLOW
I follow these steps in exact order:
1. **INITIALIZATION** - Review Memory Bank, state task objective, identify platform
2. **DOCUMENTATION SETUP** - Update Memory Bank files
3. **TASK PLANNING** - Create step-by-step plan in tasks.md with [ ] markers
4. **IMPLEMENTATION** - Execute commands one at a time, update task status in tasks.md
5. **REFLECTION** - Document learnings with 4 specific subsections
6. **ARCHIVING** - Archive tasks in docs/archive/completed_tasks.md

## ⚡ CORE PRINCIPLES
1. **Documentation First** - Memory Bank maintenance is my primary responsibility
2. **Safe Command Execution** - I run commands ONE AT A TIME, never chained
3. **Single Source of Truth** - tasks.md is the ONLY place to track task status
4. **Real-Time Documentation** - I add updates to activeContext.md during implementation
5. **Section Checkpoints** - I verify all requirements before moving to next section
6. **VAN Protocol** - When you say "VAN", I respond with "OK VAN" and verify critical files
```

### Project Directory Structure

```
.cursor/
└── rules/
    ├── main.mdc                      # Master control file with references
    ├── system-overview.mdc           # High-level system overview
    │
    ├── Core Implementation/
    │   ├── archive.mdc               # Task archiving protocol
    │   ├── command-execution.mdc     # Command execution protocol
    │   ├── context-minimal-mode.mdc  # Context window optimization
    │   ├── cross-linking.mdc         # Cross-linking requirements
    │   ├── memory-bank.mdc           # Memory bank structure
    │   ├── platform-awareness.mdc    # Platform-specific command adaptations
    │   ├── reference-triggers.mdc    # Enhanced reference trigger system
    │   ├── reflection-format.mdc     # Reflection requirements
    │   ├── section-checkpoint-system.mdc # Enhanced section verification
    │   ├── task-tracking.mdc         # Task status tracking protocol
    │   ├── van-protocol.mdc          # VAN protocol implementation
    │   ├── verification-checklist.mdc # Simplified task verification
    │   └── workflow.mdc              # Structured workflow protocol
    │
    ├── Extended Details/
    │   ├── archive-examples.mdc      # Archive formatting examples
    │   ├── command-examples.mdc      # Command documentation examples
    │   ├── reflection-examples.mdc   # Reflection format examples
    │   └── workflow-examples.mdc     # Workflow implementation examples
    │
    └── Templates/
        ├── templates-core.mdc        # Essential templates
        └── templates-extended.mdc    # Additional specialized templates

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

## Sample Core Files

### main.mdc
```markdown
# 🔍 CURSOR'S MEMORY-BASED ASSISTANT SYSTEM

> **TL;DR:** I am an AI with memory that resets between sessions. I use a structured Memory Bank to maintain context. For any task, I must (1) check for critical files, (2) follow the 6-step workflow, (3) execute commands one at a time, (4) consult reference files, and (5) update documentation in real-time.

## 🚨 PLATFORM IDENTIFICATION - FIRST STEP

Before proceeding with any task, identify the operating system:
```
### Platform Detection
Current environment: [Windows/Mac/Linux]
Command adaptations required: [Yes/No]
```

## 🚨 CRITICAL FILE VERIFICATION - SECOND STEP

Verify critical file types (NOT directories):
```
### File Type Verification
.cursorrules: [File exists/File missing/ERROR: Is a directory]
memory-bank: [Directory exists/Directory missing]
docs/archive: [Directory exists/Directory missing]
tasks.md: [File exists/File missing]

Creating any missing files (NOT directories):

```bash
### Preferred Tool-Based Commands

Use these built-in tools instead of direct terminal commands:
- `list_dir` tool - For listing directory contents (instead of dir/ls)
- `edit_file` tool - For creating/editing files (instead of echo/touch)
- Use relative paths directly with tools (instead of cd commands)
- `run_terminal_cmd` - When terminal commands are necessary, execute ONE at a time

```
```

## 🚨 MISSION-CRITICAL ESSENTIALS

1. **Memory Bank Files** - Create/update these first:
   - `projectbrief.md` - Core requirements
   - `productContext.md` - Project purpose
   - `activeContext.md` - Current focus
   - `systemPatterns.md` - Architecture
   - `techContext.md` - Tech stack
   - `progress.md` - Status & reflections
   - `tasks.md` - SINGLE SOURCE OF TRUTH for all task tracking

2. **Required Workflow** - Follow these steps in order:
   ```
   1️⃣ INITIALIZATION
   2️⃣ DOCUMENTATION SETUP
   3️⃣ TASK PLANNING
   4️⃣ IMPLEMENTATION
   5️⃣ REFLECTION
   6️⃣ ARCHIVING
   ```

3. **Command Safety** - Execute commands ONE AT A TIME with platform awareness
4. **Reference Consulting** - Explicitly check reference files with standardized format
5. **Real-Time Updates** - Update implementation details in activeContext.md

## ⚡ QUICK REFERENCES

| Critical Process | Reference Link | When to Consult |
|---|----|-----|
| Memory Structure | [memory-bank.mdc](mdc:.cursor/rules/Core%20Implementation/memory-bank.mdc) | Before updating any docs |
| Workflow Process | [workflow.mdc](mdc:.cursor/rules/Core%20Implementation/workflow.mdc) | When starting a task |
| Command Safety  | [command-execution.mdc](mdc:.cursor/rules/Core%20Implementation/command-execution.mdc) | Before running commands |
| Task Archiving | [archive.mdc](mdc:.cursor/rules/Core%20Implementation/archive.mdc) | When completing a task |
| Verification | [verification-checklist-simplified.mdc](mdc:.cursor/rules/Core%20Implementation/verification-checklist-simplified.mdc) | Before finishing any task |
| Task Tracking | [simplified-task-tracking.mdc](mdc:.cursor/rules/Core%20Implementation/simplified-task-tracking.mdc) | When updating task status |
| Reference Triggers | [reference-triggers.mdc](mdc:.cursor/rules/Core%20Implementation/reference-triggers.mdc) | When consulting examples |
| Section Checkpoints | [section-checkpoint-system.mdc](mdc:.cursor/rules/Core%20Implementation/section-checkpoint-system.mdc) | At the end of each section |
| Platform Awareness | [platform-awareness.mdc](mdc:.cursor/rules/Core%20Implementation/platform-awareness.mdc) | When executing commands |
| Context Optimization | [context-minimal-mode.mdc](mdc:.cursor/rules/Core%20Implementation/context-minimal-mode.mdc) | When context space is limited |
```

### workflow.mdc
```markdown
# STRUCTURED WORKFLOW PROTOCOL

> **TL;DR:** Follow a 6-step workflow in exact sequence. ALWAYS update section tracking after completing each section. Update task status ONLY in tasks.md. Add implementation details to activeContext.md.

## 🚨 SECTION TRANSITION MARKERS

These visual markers indicate workflow section transitions:

```
======== INITIALIZATION COMPLETE ⟹ STARTING DOCUMENTATION SETUP ========

======== DOCUMENTATION SETUP COMPLETE ⟹ STARTING TASK PLANNING ========

======== TASK PLANNING COMPLETE ⟹ STARTING IMPLEMENTATION ========

======== IMPLEMENTATION COMPLETE ⟹ STARTING REFLECTION ========

======== REFLECTION COMPLETE ⟹ STARTING ARCHIVING ========

======== ARCHIVING COMPLETE ⟹ TASK FINISHED ========
```

## 🗂️ WORKFLOW SECTIONS

These 6 sections must be completed in this exact order:

1. **INITIALIZATION** - Establish context, identify platform
2. **DOCUMENTATION SETUP** - Update Memory Bank
3. **TASK PLANNING** - Create step-by-step plan in tasks.md
4. **IMPLEMENTATION** - Execute commands
5. **REFLECTION** - Document learnings
6. **ARCHIVING** - Store completed work

## 📋 SECTION TRACKING TEMPLATE

Add this at the start of every task:
```
## Section Progress
[ ] 1. INITIALIZATION
[ ] 2. DOCUMENTATION SETUP 
[ ] 3. TASK PLANNING
[ ] 4. IMPLEMENTATION
[ ] 5. REFLECTION
[ ] 6. ARCHIVING
```
```

### Enhanced Features

#### Section Checkpoint System
```markdown
✓ SECTION CHECKPOINT: [SECTION NAME]
- Requirement 1? [YES/NO]
- Requirement 2? [YES/NO]
- Requirement 3? [YES/NO]
- Section tracking updated to [X]? [YES/NO]

→ If all YES: Ready for next section
→ If any NO: Fix missing items before proceeding
```

#### Reference Check Format
```markdown
📚 REFERENCE CHECK:
- CONSULTING: [file name]
- PURPOSE: [specific reason for consulting]
- CRITICAL ELEMENTS: [key items to look for]

Key insights:
- [Key insight 1]
- [Key insight 2]
- [Key insight 3]

✓ Reference consultation complete
```

#### Task Status Update Format
```markdown
🔄 TASK UPDATE: [Task/Subtask] - [X] Complete/[ ] Pending
- Updated in tasks.md ✓

🔄 IMPLEMENTATION UPDATE:
- Added to activeContext.md: [Brief implementation details]
```

## Implementation Strategy

For optimal implementation of the Memory Bank System:

1. **Start with Global Rules**: Set up the Global Rules file in Cursor Settings first
2. **Create Directory Structure**: Establish the .cursor/rules directory structure
3. **Implement Core Files**: Create the core implementation files
4. **Add Extended Details**: Create the extended detail files with examples
5. **Implement Memory Bank Template**: Set up the initial Memory Bank structure
6. **Create Reference Triggers**: Ensure all reference triggers are in place

## New Features and Enhancements

1. **Single Source of Truth**: tasks.md is now the only file for tracking task status
2. **Enhanced Section Checkpoints**: Clear visual markers and verification questions at section transitions
3. **VAN Protocol**: Quick initialization protocol triggered by user typing "VAN"
4. **Platform-Specific Command Adaptations**: Commands automatically adapted for Windows, Mac, or Linux
5. **Standardized Reference Checks**: Formal process for consulting documentation
6. **Real-Time Documentation Updates**: Continuous updates to activeContext.md during implementation
7. **Tool-Based Command Execution**: Preference for built-in tools over direct terminal commands

## Best Practices for System Maintenance

1. **Keep Core Files Concise**: Core files should be 200-300 lines maximum
2. **Move Examples to Extended Files**: Detailed examples belong in extended files
3. **Add Reference Triggers**: Always include reference triggers for detailed documentation
4. **Use Appropriate Rule Types**: Select the right rule type for each file's purpose
5. **Maintain Directory Structure**: Keep the established directory structure
6. **Document Reference Relationships**: Clearly indicate which files reference others

## Common Implementation Challenges

1. **Missing Section Headers**: Always use all six mandatory section headers in exact order
2. **Incorrect Task Status Tracking**: Update task status only in tasks.md (Single Source of Truth)
3. **Skipped Verification**: Always run the verification checklist before completing any task
4. **Template Text Remnants**: Always remove template/placeholder text in archive files
5. **Command Chaining**: Always execute commands one at a time, never chained
6. **.cursorrules as Directory**: Creating .cursorrules as a directory instead of a file

## Conclusion

This enhanced Memory Bank System architecture optimizes for both LLM processing efficiency and comprehensive documentation. The additions of platform awareness, section checkpoints, standardized reference checks, and single source of truth for task tracking significantly improve the system's robustness and usability.

The system's effectiveness depends entirely on strict adherence to its architectural principles and documentation protocols. When implemented correctly, it allows an AI assistant to maintain context across sessions, creating a truly persistent development partner that can adapt to any operating system and maintain clear documentation through a structured workflow.