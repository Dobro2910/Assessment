def main():
    t = int(input())
    
    for _ in range(t):
        n = int(input())
        
        # impossible cases
        if n < 4 or n % 2 != 0:
            print(-1)
            continue
        
        # min crafts
        min_crafts = (n + 5) // 6
        
        # max crafts
        max_crafts = n // 4
        
        print(min_crafts, max_crafts)


if __name__ == "__main__":
    main()