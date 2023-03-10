using Microsoft.JSInterop;

public class PhaserFunctions
{
    public async Task PhaserInit(IJSRuntime js)
    {
        Console.WriteLine("Phaser Init!");
        var objectRef = DotNetObjectReference.Create(this);
        await js.InvokeVoidAsync("phaserInit", objectRef);
    }

    [JSInvokable]
    public async Task OnPhaserLoaded()
    {
        Console.WriteLine("Phaser has been loaded! Do stuff here...");
        // This is about as far as I can get with Blazor + Phaser. There's a great example
        // of this integration here if I want to go further: https://github.com/amolenk/GameATron4000
    }
}