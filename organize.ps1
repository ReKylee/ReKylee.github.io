# This script organizes your Svelte project files and automatically updates import paths.
# It is safe to run on a partially-organized project.

Write-Host "Starting complete project organization and path updates..." -ForegroundColor Green

$basePath = Resolve-Path "src/lib"

# --- Define the new structure and file moves ---
# This list contains all components, including those already moved.
$moves = @{
    # Layout Components
    "$basePath/components/Header.svelte" = "$basePath/components/layout/Header.svelte";
    "$basePath/components/Footer.svelte" = "$basePath/components/layout/Footer.svelte";
    "$basePath/components/Nav.svelte" = "$basePath/components/layout/Nav.svelte";
    "$basePath/components/ScrollToTop.svelte" = "$basePath/components/layout/ScrollToTop.svelte";

    # UI Components
    "$basePath/components/GlitchText.svelte" = "$basePath/components/ui/GlitchText.svelte";
    "$basePath/components/Section.svelte" = "$basePath/components/ui/Section.svelte";
    "$basePath/components/CRTFilter.svelte" = "$basePath/components/ui/CRTFilter.svelte";
    "$basePath/components/CRTControl.svelte" = "$basePath/components/ui/CRTControl.svelte";
    "$basePath/components/Typewriter.svelte" = "$basePath/components/ui/Typewriter.svelte";
    "$basePath/components/Timeline.svelte" = "$basePath/components/ui/Timeline.svelte";
    "$basePath/components/ThemeSwitch.svelte" = "$basePath/components/ui/ThemeSwitch.svelte";
    "$basePath/components/ProjectCard.svelte" = "$basePath/components/ui/ProjectCard.svelte";
    "$basePath/components/SkillCard.svelte" = "$basePath/components/ui/SkillCard.svelte";
    "$basePath/components/SkillIcon.svelte" = "$basePath/components/ui/SkillIcon.svelte";
    "$basePath/components/BlinkingCursor.svelte" = "$basePath/components/ui/BlinkingCursor.svelte";
    "$basePath/components/Kirby.svelte" = "$basePath/components/ui/Kirby.svelte";

    # Feature Components & Folders
    "$basePath/components/AboutSection.svelte" = "$basePath/components/features/AboutSection.svelte";
    "$basePath/components/SkillsSection.svelte" = "$basePath/components/features/SkillsSection.svelte";
    "$basePath/components/ProjectsSection.svelte" = "$basePath/components/features/ProjectsSection.svelte";
    "$basePath/components/ExperienceSection.svelte" = "$basePath/components/features/ExperienceSection.svelte";
    "$basePath/components/EducationSection.svelte" = "$basePath/components/features/EducationSection.svelte";
    "$basePath/components/terminal" = "$basePath/components/features/terminal";
    "$basePath/components/skills" = "$basePath/components/features/skills";

    # Other Lib Files
    "$basePath/i18n.js" = "$basePath/utils/i18n.js";
    "$basePath/transitions/print.ts" = "$basePath/transitions/transitions.ts";
}

# --- Create new directories ---
$moves.Values | ForEach-Object {
    $dir = Split-Path $_ -Parent
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Created directory: $dir"
    }
}

# --- Move remaining files and folders ---
Write-Host "Checking for files to move..."
$moves.GetEnumerator() | ForEach-Object {
    # THE FIX: This `if` statement makes the script robust.
    # It checks if the file exists at the *original* source location before trying to move it.
    # If a file was already moved by the previous script, this check will fail and the script
    # will safely skip it without causing an error.
    if (Test-Path $_.Name) {
        Move-Item -Path $_.Name -Destination $_.Value -Force
        Write-Host "Moved: $($_.Name) -> $($_.Value)"
    }
}

# --- Update import paths ---
# This section will run over all files and fix any remaining incorrect import paths.
Write-Host "Updating all import paths in project files..."
$filesToUpdate = Get-ChildItem -Path "src" -Recurse -Include *.svelte, *.ts, *.js

# Define all possible path replacements, from old to new.
$pathUpdates = @{
    # Layout
    "from '$lib/components/Header.svelte'" = "from '$lib/components/layout/Header.svelte'";
    "from '$lib/components/Footer.svelte'" = "from '$lib/components/layout/Footer.svelte'";
    "from '$lib/components/Nav.svelte'" = "from '$lib/components/layout/Nav.svelte'";
    "from '$lib/components/ScrollToTop.svelte'" = "from '$lib/components/layout/ScrollToTop.svelte'";
    # UI
    "from '$lib/components/GlitchText.svelte'" = "from '$lib/components/ui/GlitchText.svelte'";
    "from '../GlitchText.svelte'" = "from '$lib/components/ui/GlitchText.svelte'";
    "from '$lib/components/Section.svelte'" = "from '$lib/components/ui/Section.svelte'";
    "from '$lib/components/CRTFilter.svelte'" = "from '$lib/components/ui/CRTFilter.svelte'";
    "from '$lib/components/CRTControl.svelte'" = "from '$lib/components/ui/CRTControl.svelte'";
    "from '$lib/components/Typewriter.svelte'" = "from '$lib/components/ui/Typewriter.svelte'";
    "from '$lib/components/Timeline.svelte'" = "from '$lib/components/ui/Timeline.svelte'";
    "from '$lib/components/ThemeSwitch.svelte'" = "from '$lib/components/ui/ThemeSwitch.svelte'";
    "from '$lib/components/ProjectCard.svelte'" = "from '$lib/components/ui/ProjectCard.svelte'";
    "from '$lib/components/SkillCard.svelte'" = "from '$lib/components/ui/SkillCard.svelte'";
    "from '$lib/components/SkillIcon.svelte'" = "from '$lib/components/ui/SkillIcon.svelte'";
    "from '$lib/components/skills/SkillIcon.svelte'" = "from '$lib/components/ui/SkillIcon.svelte'";
    "from '$lib/components/BlinkingCursor.svelte'" = "from '$lib/components/ui/BlinkingCursor.svelte'";
    "from './BlinkingCursor.svelte'" = "from '$lib/components/ui/BlinkingCursor.svelte'";
    # Features
    "from '$lib/components/terminal/Terminal.svelte'" = "from '$lib/components/features/terminal/Terminal.svelte'";
    "from './BootSequence.svelte'" = "from '$lib/components/features/terminal/BootSequence.svelte'";
    "from './FileExplorer.svelte'" = "from '$lib/components/features/terminal/FileExplorer.svelte'";
    "from './ProjectView.svelte'" = "from '$lib/components/features/terminal/ProjectView.svelte'";
    "from './ProjectFile.svelte'" = "from '$lib/components/features/terminal/ProjectFile.svelte'";
    # Utils, Transitions, etc.
    "from '$lib/i18n'" = "from '$lib/utils/i18n'";
    "from '$lib/transitions/print'" = "from '$lib/transitions/transitions'";
    "from '$lib/transitions/transitions'" = "from '$lib/transitions/transitions'";
}

foreach ($file in $filesToUpdate) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    $pathUpdates.GetEnumerator() | ForEach-Object {
        $content = $content -replace [regex]::Escape($_.Name), $_.Value
    }

    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated paths in: $($file.FullName)" -ForegroundColor Cyan
    }
}

Write-Host "----------------------------------------------------" -ForegroundColor Green
Write-Host "Project successfully organized and paths updated!" -ForegroundColor Green
Write-Host "----------------------------------------------------" -ForegroundColor Green
